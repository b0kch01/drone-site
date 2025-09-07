import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="bg-background text-foreground" id="contact">
      {/* Call to Action Section */}
      <section className="px-6 py-32 md:py-48 lg:py-56 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-mono mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-foreground/50 mb-12 max-w-3xl mx-auto">
              Deploy cutting-edge autonomous systems that deliver real-time
              intelligence and unmatched operational efficiency. Let&apos;s
              build the future of aerial robotics together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-colors text-lg"
              >
                Schedule Demo
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-background transition-colors text-lg"
              >
                View Documentation
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-foreground/50 mt-2">Uptime Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">45+</div>
              <div className="text-foreground/50 mt-2">Minutes Flight Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">10km</div>
              <div className="text-foreground/50 mt-2">Operating Range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">24/7</div>
              <div className="text-foreground/50 mt-2">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-foreground/10">
        <div className="px-6 py-12 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
              {/* Company Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">MYOTIS</h3>
                <p className="text-foreground/50 mb-4 max-w-md">
                  Autonomous aerial systems powered by advanced AI for
                  mission-critical operations.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    <YoutubeIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col md:flex-row md:gap-8">
                <a
                  href="#"
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-foreground/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-foreground/50 text-sm mb-4 md:mb-0">
                  © 2026 Myotis. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  <a
                    href="#"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
