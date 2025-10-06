import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-3">
          <Image src="/img/logo-dlux.jpeg" alt="D-LUX logo" width={40} height={40} className="rounded-sm" />
          <div>
            <p className="font-semibold">D-LUX Detailing</p>
            <p className="text-sm text-muted-foreground">Where luxury meets precision.</p>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="text-sm space-y-2">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-sm">
          <p>
            <a className="hover:underline" href="tel:+15055570590">
              Call: (505) 557-0590
            </a>
          </p>
          <p>
            <a className="hover:underline" href="mailto:Do620322@gmail.com">
              Email: Do620322@gmail.com
            </a>
          </p>
          <p className="text-muted-foreground mt-2">
            © {new Date().getFullYear()} D-LUX Detailing. All rights reserved.
          </p>
          <p className="text-muted-foreground">
            <Link href="#" className="hover:underline">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="#" className="hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
