import { Book, Rating, User } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import {
  PiCaretRight,
  PiChartLineUpLight,
  PiStar,
  PiStarFill,
} from 'react-icons/pi'

import { DashboardLayout } from '@/components/DashboardLayout'
import { HeaderTitle } from '@/components/HeaderTitle'
import { prisma } from '@/lib/prisma'

import {
  BookSection,
  Card,
  Container,
  Header,
  MostRecentViews,
  PopularBooksHeader,
  SeeAllLink,
  Stars,
  Subtitle,
  UserSection,
} from './styles'

interface HomeProps {
  ratings: Array<
    Rating & {
      book: Book
      user: User
    }
  >
}

export default function Home({ ratings }: HomeProps) {
  return (
    <Container>
      <Header>
        <PiChartLineUpLight />
        <h1>Início</h1>
      </Header>

      <Subtitle>Avaliações mais recentes</Subtitle>

      <PopularBooksHeader>
        <Subtitle>Livros populares</Subtitle>
        <SeeAllLink href="#">
          Ver todos <PiCaretRight />
        </SeeAllLink>
      </PopularBooksHeader>

      <MostRecentViews>
        {ratings.map((rating) => (
          <Card key={rating.id}>
            <UserSection>
              <Image
                src={rating.user.avatar_url!}
                width={200}
                height={200}
                alt={rating.user.name}
              />
              <HeaderTitle
                title={rating.user.name}
                subtitle={formatDistanceToNow(rating.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              />
              <Stars>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < rating.rate ? (
                    <PiStarFill key={index} />
                  ) : (
                    <PiStar key={index} />
                  ),
                )}
              </Stars>
            </UserSection>

            <BookSection>
              <Image
                src={rating.book.cover_url!}
                width={108}
                height={152}
                alt={rating.book.name}
              />
              <div>
                <HeaderTitle
                  title={rating.book.name}
                  subtitle={rating.book.author}
                />
                <p className="summary">
                  {rating.book.summary.length < 200 ? (
                    rating.book.summary
                  ) : (
                    <>
                      {rating.book.summary.substring(0, 200)}...{' '}
                      <strong>ver mais</strong>
                    </>
                  )}
                </p>
              </div>
            </BookSection>
          </Card>
        ))}
      </MostRecentViews>
    </Container>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
  })

  return {
    props: {
      ratings: ratings.map((rating) => ({
        ...rating,
        created_at: rating.created_at.toISOString(),
        book: {
          ...rating.book,
          created_at: rating.book.created_at.toISOString(),
        },
        user: {
          ...rating.user,
          created_at: rating.user.created_at.toISOString(),
        },
      })),
    },
  }
}
