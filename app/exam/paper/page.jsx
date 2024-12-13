"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Paper = () => {
  const router = useRouter();
  const [paper, setPaper] = useState({
    questions: [],
    ans: [],
    currentQuestion: 0,
    timer: 30 * 60,
    isLastQuestion: false,
    selected: "",
    formSubmitted: false,
    saveExit: false,
    count: 0,
    dis: true,
  });

  const options = ["Strongly Agree", "Strongly Disagree", "Agree", "Disagree"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fetchDataAndStartTimer = async () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || !user.grade) {
          console.error("User or grade not found in localStorage");
          return;
        }

        const std = parseInt(user.grade);

        const fetchedQuestions = await fetchQuestions(std);

        const isExamCompleted =
          Array.isArray(user.answers) &&
          user.answers.length === fetchedQuestions?.length;

        if (isExamCompleted) {
          alert(
            "You have completed all questions. Redirecting to another page."
          );
          router.replace("/exam/success");
        }

        const initialCount = Array.isArray(user.answers)
          ? user.answers.length
          : 0;

        setPaper((prevPaper) => ({
          ...prevPaper,
          questions: fetchedQuestions,
          ans: user.answers || [],
          count: initialCount,
        }));

        const intervalId = startTimer();
        return () => clearInterval(intervalId);
      };

      fetchDataAndStartTimer();
    }
  }, []);

  const fetchQuestions = async (std) => {
    try {
      const response = await axios.get(
        `https://bct-gamma.vercel.app/questions/${
          std <= 5
            ? "primary"
            : std >= 6 && std <= 8
            ? "junior"
            : std >= 9
            ? "senior"
            : null
        }`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  };

  const startTimer = () => {
    return setInterval(() => {
      setPaper((prevPaper) => ({
        ...prevPaper,
        timer: prevPaper.timer > 0 ? prevPaper.timer - 1 : 0,
      }));
    }, 1000);
  };

  const handleSubmit = async () => {
    if (paper.formSubmitted) {
      return;
    }

    let user = JSON.parse(localStorage.getItem("user"));
    let userid = user.userId;
    let obj = {
      question: paper.questions[paper.count].question,
      answer: paper.selected,
      type: paper.questions[paper.count].type,
      domain: paper.questions[paper.count].domain,
    };
    paper.ans.push(obj);

    try {
      setPaper((prevPaper) => ({
        ...prevPaper,
        formSubmitted: true,
      }));
      const response = await axios.put(
        `https://edu-green.vercel.app/register/update/${userid}`,
        { answers: paper.ans }
      );

      if (response) {
        router.replace("/exam/success");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleNextQuestion = () => {
    if (paper.questions[paper.count]) {
      let obj = {
        question: paper.questions[paper.count].question,
        answer: paper.selected,
        type: paper.questions[paper.count].type,
        domain: paper.questions[paper.count].domain,
      };
      paper.ans.push(obj);
      setPaper({ ...paper, count: paper.count + 1, dis: true, selected: "" });
      if (paper.count + 1 === paper.questions.length) {
        handleSubmit();
      }
    } else {
      console.error("Question not found at index:", paper.count);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-[100vh]"
      style={{ backgroundImage: 'url("/background.svg")' }}
    >
      <div className="w-[100vw] md:w-[80vw] mx-auto pt-[80px] p-5 text-[#02618f]">
        <div className="bg-white rounded-lg h-full p-5 md:p-10 space-y-10 shadow-md">
          <div className="flex justify-between text-[36px] font-semibold  pt-4">
            <p>Student Assesment Test</p>
          </div>
          {paper?.questions.length > 0 && (
            <div className="text-[24px] font-semibold space-y-10">
              <p>
                Question {paper?.count + 1}:{" "}
                {paper?.questions[paper.count]?.question}
              </p>
              <div className="grid grid-cols-2 gap-y-10">
                {options.map((option, index) => (
                  <div key={index} className="">
                    <input
                      type="radio"
                      name="selected"
                      value={option}
                      checked={option === paper.selected}
                      className="mr-2 w-6 h-6"
                      onClick={(e) =>
                        setPaper({
                          ...paper,
                          dis: false,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={
                    paper.count + 1 === paper.questions.length
                      ? handleSubmit
                      : handleNextQuestion
                  }
                  className="text-white text-base bg-[] rounded-lg w-[160px] md:w-[184px] h-[40px] font-semibold"
                  style={{
                    backgroundColor: paper.dis ? "#CED0D0" : "#02618f",
                  }}
                  disabled={paper.dis}
                >
                  {paper.count + 1 === paper.questions.length
                    ? "Submit"
                    : "Next"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paper;
