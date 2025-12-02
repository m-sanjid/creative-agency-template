"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  budget: z.string().min(1, { message: "Please enter your budget." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      budget: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      })
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-gradient-primary">Get in Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 lg:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="glass border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="glass border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 (555) 000-0000"
                            {...field}
                            className="glass border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Budget</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="$1,000 - $5,000"
                            {...field}
                            className="glass border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[150px] glass border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
