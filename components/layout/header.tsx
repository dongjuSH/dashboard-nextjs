"use client"

import Link from "next/link"
import { DotIcon, House, UserRoundPlus } from "lucide-react"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useDashboardNavigation } from "@/components/layout/dashboard_navigation"

export default function Header() {
  // 사이드바에서 선택된 메뉴 상태
  const { activeItem, activeSubItem, activeIcon: ActiveIcon } = useDashboardNavigation()

  return (
    <header className="p-2 border-b flex items-center justify-between">
      {/* 좌측 ui */}
      <div>
        {/* breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            {/* 홈 메뉴 */}
            <BreadcrumbItem>
              <House className="w-5" />
              {activeItem === "Home" ? (
                <BreadcrumbPage>Home</BreadcrumbPage>
              ) : (
                <BreadcrumbLink render={<Link href="/">Home</Link>} />
              )}
            </BreadcrumbItem>

            {/* 상위 메뉴 */}
            {activeItem !== "Home" && (
              <>
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <ActiveIcon className="w-5" />
                  <BreadcrumbLink>{activeItem}</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}

            {/* 하위 메뉴 */}
            {activeItem !== "Home" && activeSubItem && (
              <>
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>{activeSubItem}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 우측 ui */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount className="bg-black border">
            +
            <span>9</span>
          </AvatarGroupCount>
        </AvatarGroup>

        <Button className="border-[#282b2b]">
          <UserRoundPlus />
          Invite
        </Button>
      </div>
    </header>
  );
}