let counter = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("counter");
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  const heartButton = document.getElementById("heart");
  const pauseButton = document.getElementById("pause");
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("list");

  // Start the timer
  function startTimer() {
    intervalId = setInterval(() => {
      counter++;
      counterDisplay.textContent = counter;
    }, 1000);
  }

  // Stop the timer
  function stopTimer() {
    clearInterval(intervalId);
  }

  // Start the timer when the page loads
  startTimer();

  // Increment and Decrement Counter
  plusButton.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
  });

  minusButton.addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
  });

  // "Like" a Number
  heartButton.addEventListener("click", () => {
    const likesList = document.querySelector(".likes");
    const existingLike = document.querySelector(`[data-number='${counter}']`);

    if (existingLike) {
      const currentCount = parseInt(existingLike.dataset.count, 10) + 1;
      existingLike.dataset.count = currentCount;
      existingLike.textContent = `${counter} has been liked ${currentCount} times`;
    } else {
      const newLike = document.createElement("li");
      newLike.dataset.number = counter;
      newLike.dataset.count = 1;
      newLike.textContent = `${counter} has been liked 1 time`;
      likesList.appendChild(newLike);
    }
  });

  // Pause and Resume the Counter
  pauseButton.addEventListener("click", () => {
    if (pauseButton.textContent === "pause") {
      stopTimer();
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.textContent = "resume";
    } else {
      startTimer();
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.textContent = "pause";
    }
  });

  // Add Comments
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = commentForm.querySelector("input");
    const newComment = document.createElement("p");
    newComment.textContent = input.value;
    commentList.appendChild(newComment);
    input.value = "";
  });
});
