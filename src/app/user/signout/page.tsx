"use client"
import { logout } from "@/lib/actions/auth";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <Card className="m-auto w-xl p-5">
      Are you sure you want to sign out?
      <Button onClick={() => logout()}>Yes</Button>
    </Card>
  )
}
