
import AppAreaChart from "@/components/AppAreaChart"
import AppbarChart from "@/components/AppbarChart"
import PieChart from "@/components/AppPieChart"
import CardList from "@/components/CardList"
import TodoList from "@/components/TodoList"

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4 p-2">
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppbarChart/></div>
        <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions" /></div>
        <div className="bg-primary-foreground p-4 rounded-lg"><PieChart/></div>
        <div className="bg-primary-foreground p-4 rounded-lg"><TodoList/></div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart/></div>
        <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content" /></div>
    </div>
  )
}

export default page