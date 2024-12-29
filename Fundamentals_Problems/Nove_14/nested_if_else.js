let isUserPrime = false;
let isUserDiscovery = true;
let isUserAccorn = true;

if (isUserPrime) {
  if (isUserDiscovery) {
    if (isUserAccorn) {
      console.log("Enjoy all  prime, discovery and accorn.");
    } else if (isUserPrime) {
      console.log("Enjoy both prime and discovery content");
    } else {
      /*else if (isUserDiscovery) {
            // console.log("Enjoy prime content")
            console.log("Enjoy both discovery and accorn content.");
        }*/
      console.log("Enjoy discovery content.");
    }
  } else if (isUserAccorn) {
    console.log("Enjoy both prime and accorn");
  } else {
    console.log("Enjoy primee content.");
  }
} else if (isUserPrime) {
  console.log("Enjoy both Prime content");
} else if (isUserDiscovery) {
  console.log("Enjoy discovery content");
} else if (isUserAccorn) {
  console.log("Enjoy Accorn content");
} else {
  console.log("please buy a subscription top enjoy content");
}
