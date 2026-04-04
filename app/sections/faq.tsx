"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I'm not technical. Will this work for me?",
    answer:
      "Good. The offer is designed for non-technical professionals. No coding needed. No complex setup. If you can use email, you can use these workflows. Everything is copy-paste ready.",
  },
  {
    question: "I already use ChatGPT sometimes. Why Claude?",
    answer:
      "Casual use isn't the same as having repeatable Claude workflows that improve your work every week. Claude excels at nuanced writing, sustained complex tasks, and long-form content. These workflows are built specifically for Claude's strengths.",
  },
  {
    question: "Is this just another AI hype course?",
    answer:
      "This is about real work, useful output, and practical systems. No '10x your productivity' nonsense. Just workflows that save time and improve output.",
  },
  {
    question: "I don't have time to learn another tool.",
    answer:
      "The goal is to save time quickly with workflows you can use in your current work right away. Most people save 5+ hours per week within the first month. The workflows fit what you already do.",
  },
  {
    question: "There's so much AI content already. What's different?",
    answer:
      "Most AI content is broad, noisy, or technical. This is narrower: Claude for real work, with a clear path. Not random tips — a system.",
  },
  {
    question: "What format is the workflow starter?",
    answer:
      "You'll get a PDF with 7 copy-paste workflows, plus access to a Notion template with all prompts organized by use case. Everything is ready to use immediately.",
  },
  {
    question: "Is this really free?",
    answer:
      "Yes. The Workflow Starter is 100% free. No credit card required. You'll also get invited to join the free Skool community where we share more workflows and help each other.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

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
          isOpen ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-slate-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      {/* Transparent — grid shows through */}
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-[1.1]">
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
