import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Precious</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-8 xl:flex-row mt-4">
        {/* LEFT */}
        <div className="w-full xl:w-[1/3] space-y-6">
          {/* USER BADGE CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-semibold text-xl">User Badge</h1>
            <div className="flex mt-4 gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full border-1 bg-blue-500/30 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified and is a trusted member of our
                    community.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full border-1 bg-green-500/30 border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Protected</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified and is a trusted member of our
                    community.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full border-1 bg-yellow-500/30 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified and is a trusted member of our
                    community.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full border-1 bg-orange-500/30 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified and is a trusted member of our
                    community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl mb-4">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                  <EditUser />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  profile Completion
                </p>
                <Progress value={70} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>precious</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>precious@gmail.com</span>
              </div>
                 <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+234 812 345 6789</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground ">
                Joined on January 1, 2023
              </p>
            </div>
          </div>
          {/* CARDLIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="latestTransactions" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-[2/3] space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="flex items-center justify-center w-15 h-15 rounded-full mb-4">
                <AvatarImage src="/avatar.png" alt="User Avatar" />
                <AvatarFallback >OP</AvatarFallback>
              </Avatar>
              <h1 className="font-semibold text-2xl">Precious</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo ipsa, ipsum nostrum commodi, dolorum blanditiis debitis dolores nemo, iure inventore cumque. Earum ipsa temporibus harum deleniti, consequuntur asperiores fugit optio tenetur ipsam totam dicta tempore, iste reprehenderit quod atque.</p>
            </div>
          </div>

          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1>Users Activity</h1>
            <AppLineChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
