function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    const statusText = document.getElementById("statusReport");
    const body = document.querySelector("body");
    // Put your code for the exercises here.



    button.addEventListener("click", function() {
      statusText.innerHTML = "Houston, we have liftoff!"
    })

    missionAbort.addEventListener("mouseover", function() {
      body.style.backgroundColor = "red";
    })
  
    missionAbort.addEventListener("mouseout", function() {
      body.style.backgroundColor = "";
    })

  missionAbort.addEventListener("click", function() {
    let shouldAbort = window.confirm("Are you sure you want to abort the mission?");

    if (shouldAbort) {
      statusText.innerHTML = "Mission aborted! Space shuttle returning home.";
    }
  })
  
}

window.addEventListener("load", init);