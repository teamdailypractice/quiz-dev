const gitQuiz = [
    {
      Question:
        "In Git, how can you stage a file that ends with a *.txt extension?",
      Answer: "git add *.txt",
      Distractor1: "git add *.text",
      Distractor2: "git add -a .txt",
      Distractor3: "git add - *.txt",
      Explanation:
        "git add is a command used to add a file that is in the working directory to the staging area. Use *.txt to add specific pattern.",
      Link: "https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/"
    },
    {
      Question:
        "In Git, how can you save uncommitted changes on your local machine so you can work on it later?",
      Answer: "git stash",
      Distractor1: "git copy into notepad.exe",
      Distractor2: "git save code",
      Distractor3: "git clone --for later",
      Explanation:
        "Stashes are temporary storage spaces where you can store your code. When you're done, you can put your code back from the stash using git stash pop. You won’t have to worry about losing any uncommitted changes!",
      Link: "https://www.freecodecamp.org/news/how-to-use-git-stash-as-temporary-storage-84a0a1e37a43/"
    },
  ];
  
  export default gitQuiz;
  