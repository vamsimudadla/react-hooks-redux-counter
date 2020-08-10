export function goToHomePage(history: any) {
  history.push("/");
}

export function navigateToCounterPage(history: any) {
  history.push("/counter");
}

export function navigateToPreviousPage(history: any) {
  history.back();
}
