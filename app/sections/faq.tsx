"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I've tried AI already. Why does it still feel random?",
    answer:
      "Because most people aren't using a real system. They open Claude or ChatGPT, type something vague, get mixed results, and never build a repeatable workflow.\n\nThis is different. AItomation Academy gives you practical Claude workflows you can actually reuse for writing, research, content, planning, and day-to-day work.",
  },
  {
    question: "I'm not technical. Is this actually for me?",
    answer:
      "Yes. That's exactly who this is for.\n\nYou do not need to code, automate, or set anything complicated up. If you can use email, copy and paste, and follow simple instructions, you can use these workflows.",
  },
  {
    question: "What would I actually use Claude for in my real work?",
    answer:
      "Most people use it for the things that keep eating time every week:\n\n• Turning messy notes into drafts\n• Researching faster\n• Improving writing\n• Brainstorming content\n• Organizing thoughts before making decisions\n• Repurposing one idea into multiple pieces of content\n\nThe goal is simple: make Claude useful in the work you're already doing.",
  },
];

function FAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="text-slate-500 leading-relaxed whitespace-pre-line">{answer}</div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-400" />
              <span className="text-sm font-medium tracking-wide text-orange-600 uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl font-display tracking-tight text-slate-900 sm:text-4xl leading-[1.1]">
              Questions people actually ask before joining
            </h2>
          </div>

          {/* FAQ items */}
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 p-8">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={true}
              />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-10">
            <p className="text-slate-500">
              Still have questions?{" "}
              <a
                href="mailto:markosudar02@gmail.com"
                className="font-medium text-orange-500 hover:text-orange-600 cursor-pointer transition-colors"
              >
                Email me directly
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
