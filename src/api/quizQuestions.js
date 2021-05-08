var quizQuestions = [
  {
      question: "Who is your favourite Actress?",
      //image:"data:image/jpeg;base64,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",
      answers: [
          {
              type: "40 and above",
              content: "Hema Malini"
          },
          {
              type: "20 and above",
              content: "Alia Bhatt"
          },
          {
              type: "60 and above",
              content: "Meena Kumari"
          }
      ]
  },
  {
      question: "Who is your Favourite actor?",
      answers: [
          {
              type: "60 and above",
              content: "Rajesh Khanna"
          },
          {
              type: "40 and above",
              content: "Amitabh Bachhan"
          },
          {
              type: "20 and above",
              content: "Ranbir Kapoor"
          }
      ]
  },
  {
      question: "what's your Favourite dish",
      answers: [
          {
              type: "20 and above",
              content: "Pizza"
          },
          {
              type: "40 and above",
              content: "Indian Dish"
          },
          {
              type: "60 and above",
              content: "Anything"
          }
      ]
  },
  {
      question: "Who is your favourite singer",
      answers: [
          {
              type: "60 and above",
              content: "Mohammad Rafi"
          },
          {
              type: "40 and above",
              content: "Kumar sanu"
          },
          {
               type: "20 and above",
              content: "Arijit Singh"
          }
      ]
  },
  {
      question: "What your favourite past-time?",
      answers: [
          {
              type: "40 and above",
              content: "Watching News"
          },
          {
               type: "60 and above",
               content: "Spending time with family and friends"
          },
          {
               type: "20 and above",
               content: "Playing Games Online"
          }
      ]
  },
  {
     question: "Who is considered as 'Hit-Man' of Indian cricket world?",
      answers: [
          {
              type: "40 and above",
              content: "Virat kohli"
          },
          {
               type: "60 and above",
               content: "No idea!"
          },
          {
               type: "20 and above",
               content: "Rohit Sharma"
          }
      ]
  },
  {
     question: "How do you see Youtube as a career option?",
      answers: [
          {
              type: "40 and above",
              content: "Okayish"
          },
          {
               type: "60 and above",
               content: "Waste of time and energy!"
          },
          {
               type: "20 and above",
               content: "Growing platform"
          }
      ]
  },
  {
     question: "Did you ever use Cassette?",
      answers: [
          {
              type: "40 and above",
              content: "Yes"
          },
          {
               type: "60 and above",
               content: "Spent the entire childhood using it"
          },
          {
               type: "20 and above",
               content: "Not at all"
          }
      ]
  },
  
];

export default quizQuestions;
