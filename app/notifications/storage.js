var storage = window.localStorage;

function createNotification(id, time, name) {
  let notification = { id: id, time: time, name: name }
  let notifications = loadNotifications()
  notifications.push(notification)
  storage.setItem("notifications", JSON.stringify(notifications))
}

function getNotifications() {
  return loadNotifications()
}

function editNotification(id, time, name) {
  let notifs = loadNotifications()
  let index = findNotification(id, notifs)
  notifs[index] = { id: id, time: time, name: name }
  storage.setItem("notifications", JSON.stringify(notifs))
}

function deleteNotification(id) {
  let notifs = loadNotifications()
  let index = findNotification(id, notifs)
  notifs.splice(index, 1)
  storage.setItem("notifications", JSON.stringify(notifs))
}

function loadNotifications() {
  let notifs = JSON.parse(localStorage.getItem("notifications"))
  if(notifs === null || notifs === "null" || notifs === "[]") {
    return []
  }
  else {
    return notifs
  }
}

function findNotification(id, notifs) {
  for(i in notifs) {
    if(notifs[i].id == id) {
      return parseInt(i)
    }
  }
}