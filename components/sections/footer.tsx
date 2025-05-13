import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <Link
              href="https://instagram.com/pinkbuddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary" />
            </Link>
            <Link
              href="https://twitter.com/pinkbuddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/pinkbuddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary" />
            </Link>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              info@pinkbuddy.app
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Pink Buddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
