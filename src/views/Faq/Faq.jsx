import {FaqContainer} from './FaqStyled';
import { useState } from 'react';
import FaqQuestions from './FaqComponent';


 export const Faq = () => {
    const [faqs, setfaqs] = useState([
        {
          question: 'Is it free?',
          answer: 'It sure is! Everything on Watchy is completely free to use. But of course, some of the streaming services require a subscription or a rental fee. To watch free content, we have gathered some free services for you to enjoy.',
          open: false
        },
        {
          question: 'I don’t know what to watch…!',
          answer: 'No worries. Our front page is updated daily with play tips, and the official Watchy profile is chock full of themed collections. Don’t forget to follow your friends and other users for even more inspiration!',
          open: false
        },
        {
          question: 'Do I need a profile to use Watchy?',
          answer: 'Not at all! But it’s much more fun to use if you do, and you’ll be able to access even more awesome features, like Matchlists, +Watchlist, collections, following your friends’ ratings, and more',
          open: false
        },
        {
            question: 'How do I rate a title?',
            answer: 'First of all, you’ll need a Watchy profile. Then find the title you want to rate, mark it as seen, and voila! You’ll now be able to rate it from 1-10 stars.',
            open: false
        },
        {
            question: 'I can’t agree on anything to watch with my partner/friend/family/pet!',
            answer: 'Don’t panic! Use our Matchlist feature and invite your friends with Watchy profiles to swipe away and find matches that you all want to watch. Note: Matchlists are currently only available in the mobile app.',
            open: false
        },
        {
            question: 'How do I make a collection?',
            answer: 'First, find a title you want to add to your collection. Click "Add to Collection" and then give your collection an awesome name like Space Adventures, Our favourite movies, or something totally unique to you!',
            open: false
        },
        
        

        ]);

        const [faqsTwo, setsecondfaqs] = useState([
            {
              question: 'Why can’t I find a specific title?',
              answer: 'We continue to update our content, but if a movie/show/documentary hasn’t been on a streaming service, we might not have it in our system. Feel free to write a message here with what’s missing and we’ll get right on it.',
              open: false
            },
            {
                question: 'Why is there no link to a title that I know is available for streaming?',
                answer: 'We update our links continuously, but sometimes there might be a glitch in the matrix and that’s a mistake. Please feel free to write us a message about the missing playlinks here.',
                open: false
            },
            {
                question: 'I want to watch a specific title, but none of my streaming services has it. What should I do?',
                answer: 'Just add the title to your +Watchlist and you’ll get a notification when the title is available for streaming (if you have turned on notifications in the app).',
                open: false
            },
        ]);
        const [faqsThird, setthirdfaqs] = useState([
            {
              question: 'Something’s not working right!',
              answer: 'Oh no! We will be happy to fix whatever’s wrong, just send us a message right here and we’ll take a look at it as soon as possible. Please let us know what device you’re using and whether you accessed Watchy via the app or the website. If it’s via the website, please tell us what browser you are using. If you want, it would be especially helpful if you could attach a screenshot of the issue as well!',
              open: false
            },
            {
                question: 'What browsers do you support?',
                answer: 'We currently have full support for the following browsers (the version numbers are the oldest versions we support; newer, stable releases are also supported): Chrome 63, Safari 12, Edge 79, Firefox 67. A few notes: We do not support Internet Explorer. Please upgrade to a modern browser. While the site may function on other browsers not listed here (such as Brave, Opera, etc.), we only actively test the browsers above. Regarding Edge, we only support the new, Chromium-based Edge (version 79 and up). If you are using an old version of Edge, you need update',
                open: false
            },
            {
                question: 'I changed my mind and want to delete my account...',
                answer: 'We’re sad to see you go! But if you insist on leaving us alone in the darkness all you have to do is log onto your Watchy account on the website (not available in the app), go into settings, scroll down, and click "delete profile".',
                open: false
            },
        ]);
        const [faqsForth, setforthfaqs] = useState([
          {
            question: 'Will Watchy have a Smart TV app?',
            answer: 'Yes! Our plan is to launch Watchy for Smart TVs in 2020. Unfortunately, we can’t yet give you an exact date to when it will be available. But stay tuned…',
            open: false
          },
          {
              question: 'Will it be possible to mark only episodes or seasons as seen and not the entire series?',
              answer: 'Yes! In fact we’re working on it right now. So hopefully it will be possible sooner rather than later.',
              open: false
          },
          {
              question: 'Can I import my IMDb/Trakt/Rotten Tomatoes ratings to Watchy?',
              answer: `Like HAL9000 would say in 2001: A Space Odyssey "I'm sorry, Dave. I'm afraid I can't do that". At least not yet! Stay tuned, it’s in the pipeline.`,
              open: false
          },
          {
            question:'Why is a specific streaming service not on Watchy?',
            answer: 'We continue to expand on our available streaming services, but feel free to write a message with the missing service here and we’ll let you know if it is on the way.',
            open:'false'
          }
        ]);

      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
    } 

    const toggleFAQTwo = index => {
        setsecondfaqs(faqsTwo.map((faq, a) => {
          if (a === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
    } 
    const toggleFAQThird = index => {
        setthirdfaqs(faqsThird.map((faq, a) => {
          if (a === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
    } 
    const toggleFAQForth = index => {
      setforthfaqs(faqsForth.map((faq, a) => {
        if (a === index) {
          faq.open = !faq.open
        } else {
          faq.open = false;
        }
  
        return faq;
      }))
  } 
    return (
    
            <FaqContainer>
                <section className="container">
                <h1>Faq</h1>
                <div className="faqs">
                    {faqs.map((faq, i) => (
                    <FaqQuestions faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
                <h1>Movie and Sows</h1>
                <div className="faqs">
                    {faqsTwo.map((faqTwo, i) => (
                    <FaqQuestions faq={faqTwo} index={i} toggleFAQ={toggleFAQTwo} />
                    ))}
                </div>
                <h1>HOUSTON, WE HAVE A PROBLEM</h1>
                <div className="faqs">
                    {faqsThird.map((faqThird, i) => (
                    <FaqQuestions faq={faqThird} index={i} toggleFAQ={toggleFAQThird} />
                    ))}
                </div>
                <h1>I WOULD LOVE TO HAVE THIS FEATURE ON Watchy</h1>
                <div className="faqs">
                    {faqsForth.map((faqForth, i) => (
                    <FaqQuestions faq={faqForth} index={i} toggleFAQ={toggleFAQForth} />
                    ))}
                </div>
            </section>
            </FaqContainer>

     
    )
    
};
