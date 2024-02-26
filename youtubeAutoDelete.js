let sleep = time => new Promise(res => setTimeout(res, time, "done sleeping"));

let counter = 0; // Initialize a counter to track the number of hits.

async function work() {
  let buttons = [...document.querySelectorAll("c-wiz .GqCJpe.u2cbPc.LDk2Pd .VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc")];
  console.log("Deleting " + buttons.length + " comments");
  for (let b of buttons) {
    if (counter >= 200) {
      console.log("Hit limit reached. Stopping...");
      return; // Stop the function if 200 hits are reached.
    }
    console.log("Hit " + (counter + 1));
    b.click();
    counter++;
    await sleep(2000);
  }
  console.log("End. Scrolling...")
  window.scrollTo(0, document.body.scrollHeight);
}

async function run() {
  while (counter < 200) {
    await work();
    if (counter >= 200) {
      console.log("Stopping as 200 hits have been reached.");
      break; // Exit the loop if the counter has reached 200.
    }
    await sleep(10000);
  }
}

run();
