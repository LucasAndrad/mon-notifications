var storage = window.localStorage;

function createNotification(id, time, name) {
  let notification = JSON.stringify({ id: id, time: time, name: name })
  let notifications = loadNotifications()
  notifications.push(notification)
  storage.setItem("notifications", JSON.stringify(notifications))
}

function getNotifications() {
  var storeNoti = JSON.parse(localStorage.getItem("notifications"))
  return storeNoti;
}

function loadNotifications() {
  let notfs = JSON.parse(localStorage.getItem("notifications"))
  if(notfs === null || notfs === "null" || notfs === "[]") {
    return []
  }
  else {
    return notfs
  }
}