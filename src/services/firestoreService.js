import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase";


const getLocalData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (e) {
    console.error(`Failed to parse local storage for key ${key}:`, e);
    return [];
  }
};

const saveLocalData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Failed to write local storage for key ${key}:`, e);
  }
};

export async function saveTableBooking(data) {
  if (isFirebaseConfigured()) {
    return addDoc(collection(db, "tableBookings"), {
      ...data,
      status: "new",
      createdAt: serverTimestamp()
    });
  }
  
  const bookings = getLocalData("mocha_table_bookings");
  const newBooking = {
    id: "booking-" + Math.random().toString(36).substr(2, 9),
    ...data,
    status: "new",
    createdAt: new Date().toISOString()
  };
  bookings.unshift(newBooking);
  saveLocalData("mocha_table_bookings", bookings);
  return newBooking;
}

export async function saveBirthdayBooking(data) {
  if (isFirebaseConfigured()) {
    return addDoc(collection(db, "birthdayBookings"), {
      ...data,
      status: "new",
      createdAt: serverTimestamp()
    });
  }
  
  const birthdays = getLocalData("mocha_birthday_bookings");
  const newBirthday = {
    id: "birthday-" + Math.random().toString(36).substr(2, 9),
    ...data,
    status: "new",
    createdAt: new Date().toISOString()
  };
  birthdays.unshift(newBirthday);
  saveLocalData("mocha_birthday_bookings", birthdays);
  return newBirthday;
}

export async function saveContactMessage(data) {
  if (isFirebaseConfigured()) {
    return addDoc(collection(db, "contactMessages"), {
      ...data,
      status: "new",
      createdAt: serverTimestamp()
    });
  }
  
  const messages = getLocalData("mocha_contact_messages");
  const newMessage = {
    id: "message-" + Math.random().toString(36).substr(2, 9),
    ...data,
    status: "new",
    createdAt: new Date().toISOString()
  };
  messages.unshift(newMessage);
  saveLocalData("mocha_contact_messages", messages);
  return newMessage;
}


