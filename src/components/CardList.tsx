
import { Card,  CardContent, CardFooter, CardTitle } from "./ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const popularContent = [
  {
    id: '1',
    title: 'How to learn React',
    badge: 'React',
    image: '/react-logo.svg',
    count: 1500
  },
  {
    id: '2',
    title: 'Understanding JavaScript Closures',
    badge: 'JavaScript',
    image: '/js-logo.svg',
    count: 2000
  },
  {
    id: '3',
    title: 'CSS Grid vs Flexbox',
    badge: 'CSS',
    image: '/css-logo.svg',
    count: 1800
  },
  {
    id: '4',  
    title: 'TypeScript Tips and Tricks',
    badge: 'TypeScript',
    image: '/ts-logo.svg',
    count: 2200
  },
  {
    id: '5',
    title: 'REST APIs with Node.js',
    badge: 'Node.js',
    image: '/node-logo.svg',
    count: 1700
  }
]

const latestTransactions = [
  {
    id: '1',
    title: 'Payment from John Doe',
    badge: 'john Doe',
    image: '/john-doe1.svg',
    count: 1500,
  },
  {
    id: '2',
    title: 'Payment for services',
    badge: 'Jane Smith',
    image: '/jane-smith.svg',
    count : 3000,
  },
  {
    id: '3',
    title: 'Refund from Amazon',
    badge: 'Amazon',
    image: '/amazon.svg',
    count: 2000,
  },
  {
    id: '4',
    title: 'Subscription payment',
    badge: 'Netflix',
    image: '/netflix.svg',
    count: 1500,
  },
  {
    id: '5',
    title: 'Payment from John Doe',
    badge: 'John Doe',
    image: '/john-doe2.svg',
    count: 2500,
  }
]

const CardList = ({title}:{title:string}) => {

  const list = title === 'Popular Content' ? popularContent : latestTransactions
  return (
    <div>
      <h2 className="font-medium text-lg mb-4">{title}</h2>
      <div className="flex flex-col gap-2">
        {list.map(item => (
          <Card key={item.id} className="flex-row justify-between gap-2 p-4">
            <div className="w-12 h-12 relative rounded-sm overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-contain" />
            </div>
            < CardContent className="flex-1 text-sm font-medium p-0">
              <CardTitle>{item.title}</CardTitle>
              <Badge variant="secondary" className="rounded-md p-3">
                {item.badge}
              </Badge>
            </ CardContent>
            <CardFooter className="border-none bg-transparent">
              <p>${item.count/1000}K</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CardList