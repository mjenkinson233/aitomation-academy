"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I'm not technical. Will this work for me?",
    answer: "Good. The offer is designed for non-technical professionals. No coding needed. No complex setup. If you can use email, you can use these workflows. Everything is copy-paste ready.",
  },
  {
    question: "I already use ChatGPT sometimes. Why Claude?",
    answer: "Casual use isn't the same as having repeatable Claude workflows that improve your work every week. Claude excels at nuanced writing, sustained complex tasks, and long-form content. These workflows are built specifically for Claude's strengths.",
  },
  {
    question: "Is this just another AI hype course?",
    answer: "Neither do we. This is about real work, useful output, and practical systems. No '10x your productivity' nonsense. Just workflows that save time and improve output.",
  },
  {
    question: "I don't have time to learn another tool.",
    answer: "The goal is to save time quickly with workflows you can use in your current work right away. Most people save 5+ hours per week within the first month. The workflows fit what you already do.",
  },
  {
    question: "There's so much AI content already. What's different?",
    answer: "Most AI content is broad, noisy, or technical. This is narrower: Claude for real work, with a clear path. Not random tips — a system.",
  },
  {
    question: "What format is the workflow starter?",
    answer: "You'll get a PDF with 7 copy-paste workflows, plus access to a Notion template with all prompts organized by use case. Everything is ready to use immediately.",
  },
  {
    question: "Is this really free?",
    answer: "Yes. The Workflow Starter is 100% free. No credit card required. You'll also get invited to join the free Skool community where we share more workflows and help each other.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              The questions people actually ask before joining.
            </p>
          </div>

          {/* FAQ items */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Still have questions?{" "}
              <a
                href="mailto:markosudar02@gmail.com"
                className="font-medium text-orange-600 hover:text-orange-700"
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
