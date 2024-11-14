import { useState } from "react";


const Faq = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const faqs = [
    {
      question: "Why is a building called a 'building' if it's already built?",
      answer: "Great question! It's called a building because language is strange and full of mysteries. Much like the chicken or the egg dilemma, this one might keep you up at night!",
    },
    {
      question: "If a word is misspelled in the dictionary, how would we ever know?",
      answer: "That's a conundrum! We'd probably just keep spelling it wrong until someone smarter than us noticed.",
    },
    {
      question: "Why do we press harder on the remote control buttons when we know the batteries are dead?",
      answer: "It's the universal sign of hope and frustration combined. Also, we secretly believe that our sheer willpower can charge batteries.",
    },
    {
      question: "Can a kangaroo jump higher than a house?",
      answer: "Absolutely! Houses can't jump, but kangaroos can jump really high. So, kangaroos win this one by default.",
    },
    {
      question: "Why do we call it 'after dark' when it's really 'after light'?",
      answer: "Because humans like to make things confusing. It's a tradition!",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleFAQ = (index) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
  };

  return (
    <div className="p-8 bg-white rounded shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Frequently Asked Questions</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search FAQs"
          className="w-full sm:w-1/3 p-2 mb-4 sm:mb-0 border rounded"
        />
      </div>
      <ul>
        {faqs
          .filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchTerm) ||
              faq.answer.toLowerCase().includes(searchTerm)
          )
          .map((faq, index) => (
            <li key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className="question"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(faq.question, searchTerm),
                  }}
                ></span>
              </button>
              {visibleAnswers[index] && (
                <div className="p-4 bg-white border rounded-b shadow-inner">
                  <div
                    className="answer"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(faq.answer, searchTerm),
                    }}
                  ></div>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Faq;
