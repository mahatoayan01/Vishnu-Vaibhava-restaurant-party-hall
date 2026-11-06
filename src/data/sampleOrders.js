/**
 * VISHNU VAIBHAVA - SAMPLE ORDERS & PAYMENT DATA
 * 
 * Clearly labeled as SAMPLE DEMO DATA for presentation and dashboard preview.
 * Any new orders placed through the Demo Checkout will be appended to localStorage.
 */

export const sampleOrders = [
  {
    id: "VV-2026-1001",
    customerName: "Kavitha Ramesh",
    phone: "+91 98450 12345",
    items: [
      { name: "Classic Masala Dosa", quantity: 2, price: 75 },
      { name: "Traditional South Indian Filter Coffee", quantity: 2, price: 30 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 4",
    amount: 210,
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-06 08:30 AM",
    notes: "Make dosas extra crispy with red chutney.",
    isSample: true,
  },
  {
    id: "VV-2026-1002",
    customerName: "Arun Kumar",
    phone: "+91 97412 67890",
    items: [
      { name: "Ghee Thatte Idli (2 Pcs)", quantity: 3, price: 60 },
      { name: "Crispy Medu Vada (2 Pcs)", quantity: 2, price: 55 }
    ],
    orderType: "Takeaway",
    amount: 290,
    paymentMethod: "Cash",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-06 09:15 AM",
    notes: "Pack extra sambar and coconut chutney.",
    isSample: true,
  },
  {
    id: "VV-2026-1003",
    customerName: "Sneha Hegde",
    phone: "+91 94801 23456",
    items: [
      { name: "Gobi Manchurian", quantity: 2, price: 180 },
      { name: "Paneer Pepper Dry", quantity: 1, price: 285 },
      { name: "Royal Veg Dum Biryani", quantity: 2, price: 165 }
    ],
    orderType: "Delivery",
    address: "Flat 302, Prestige Park, BEML Layout, RR Nagar",
    amount: 975,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    orderStatus: "Preparing",
    date: "2026-11-06 01:20 PM",
    notes: "Ring bell twice, leave at reception if not answering.",
    isSample: true,
  },
  {
    id: "VV-2026-1004",
    customerName: "Venkatesh Murthy",
    phone: "+91 99005 43210",
    items: [
      { name: "South Indian Special Meals (Thali)", quantity: 4, price: 130 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 11",
    amount: 520,
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-06 01:45 PM",
    notes: "Family lunch.",
    isSample: true,
  },
  {
    id: "VV-2026-1005",
    customerName: "Divya Prakash",
    phone: "+91 88612 99887",
    items: [
      { name: "Chilli Baby Corn", quantity: 1, price: 210 },
      { name: "Paneer Paratha", quantity: 2, price: 110 }
    ],
    orderType: "Takeaway",
    amount: 430,
    paymentMethod: "Cash on Counter",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-06 02:10 PM",
    notes: "Please pack hot.",
    isSample: true,
  },
  {
    id: "VV-2026-1006",
    customerName: "Pradeep Rao",
    phone: "+91 98440 55667",
    items: [
      { name: "Mushroom Pepper Dry", quantity: 1, price: 240 },
      { name: "Paneer Butter Masala", quantity: 1, price: 195 },
      { name: "Butter Naan", quantity: 4, price: 45 }
    ],
    orderType: "Delivery",
    address: "House 45, Janankshi Layout, RR Nagar",
    amount: 615,
    paymentMethod: "UPI (Paytm)",
    paymentStatus: "Paid",
    orderStatus: "Out for delivery",
    date: "2026-11-06 02:30 PM",
    notes: "Less spicy for elderly person.",
    isSample: true,
  },
  {
    id: "VV-2026-1007",
    customerName: "Meenakshi Sundaram",
    phone: "+91 96112 33445",
    items: [
      { name: "Classic Masala Dosa", quantity: 3, price: 75 },
      { name: "Bisi Bele Bath", quantity: 2, price: 80 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 2",
    amount: 385,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-05 07:45 PM",
    notes: "Extra boondi on Bisi Bele Bath.",
    isSample: true,
  },
  {
    id: "VV-2026-1008",
    customerName: "Siddharth Jain",
    phone: "+91 99801 11223",
    items: [
      { name: "Gobi Manchurian", quantity: 2, price: 180 },
      { name: "Chilli Paneer", quantity: 1, price: 270 }
    ],
    orderType: "Takeaway",
    amount: 630,
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-05 08:15 PM",
    notes: "No onion, no garlic if possible.",
    isSample: true,
  },
  {
    id: "VV-2026-1009",
    customerName: "Deepak Sharma",
    phone: "+91 97390 44556",
    items: [
      { name: "Paneer Paratha", quantity: 3, price: 110 },
      { name: "Dal Tadka", quantity: 1, price: 140 },
      { name: "Sweet Punjabi Lassi", quantity: 2, price: 65 }
    ],
    orderType: "Delivery",
    address: "B-204, Royal Palms, Halagevaderahalli",
    amount: 600,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    orderStatus: "New",
    date: "2026-11-06 03:00 PM",
    notes: "Please call when delivery partner reaches gate.",
    isSample: true,
  },
  {
    id: "VV-2026-1010",
    customerName: "Naveen Chandran",
    phone: "+91 98800 99112",
    items: [
      { name: "South Indian Special Meals (Thali)", quantity: 2, price: 130 },
      { name: "Curd Rice (Bagala Bath)", quantity: 1, price: 70 }
    ],
    orderType: "Takeaway",
    amount: 330,
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-05 01:10 PM",
    notes: "Pack meals neatly in box.",
    isSample: true,
  },
  {
    id: "VV-2026-1011",
    customerName: "Geetha Krishnan",
    phone: "+91 94480 77889",
    items: [
      { name: "Ghee Thatte Idli (2 Pcs)", quantity: 4, price: 60 },
      { name: "Traditional South Indian Filter Coffee", quantity: 4, price: 30 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 7",
    amount: 360,
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-05 09:30 AM",
    notes: "Morning walk group table.",
    isSample: true,
  },
  {
    id: "VV-2026-1012",
    customerName: "Harish Nambiar",
    phone: "+91 93412 88776",
    items: [
      { name: "Royal Veg Dum Biryani", quantity: 3, price: 165 },
      { name: "Gulab Jamun (2 Pcs)", quantity: 3, price: 50 }
    ],
    orderType: "Delivery",
    address: "No 12, 1st Cross, BEML Layout 5th Stage",
    amount: 645,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-04 08:40 PM",
    notes: "Birthday treat at home.",
    isSample: true,
  },
  {
    id: "VV-2026-1013",
    customerName: "Rohit Verma",
    phone: "+91 91080 33221",
    items: [
      { name: "Gobi Manchurian", quantity: 1, price: 180 },
      { name: "Butter Naan", quantity: 3, price: 45 },
      { name: "Paneer Butter Masala", quantity: 1, price: 195 }
    ],
    orderType: "Takeaway",
    amount: 510,
    paymentMethod: "Cash",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-04 07:15 PM",
    notes: "",
    isSample: true,
  },
  {
    id: "VV-2026-1014",
    customerName: "Ananya Deshmukh",
    phone: "+91 98455 66778",
    items: [
      { name: "Classic Masala Dosa", quantity: 2, price: 75 },
      { name: "Poori Saagu (3 Pcs)", quantity: 2, price: 70 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 1",
    amount: 290,
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-04 10:15 AM",
    notes: "Serve poori warm.",
    isSample: true,
  },
  {
    id: "VV-2026-1015",
    customerName: "Suresh Bhat",
    phone: "+91 99450 88990",
    items: [
      { name: "Paneer Pepper Dry", quantity: 1, price: 285 },
      { name: "Mushroom Pepper Dry", quantity: 1, price: 240 }
    ],
    orderType: "Delivery",
    address: "Plot 88, Kenchenahalli Main Road",
    amount: 525,
    paymentMethod: "Card",
    paymentStatus: "Refunded",
    orderStatus: "Cancelled",
    date: "2026-11-03 09:20 PM",
    notes: "Customer cancelled due to accidental duplicate booking.",
    isSample: true,
  },
  {
    id: "VV-2026-1016",
    customerName: "Manjunath Swamy",
    phone: "+91 98860 44332",
    items: [
      { name: "South Indian Special Meals (Thali)", quantity: 5, price: 130 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 15",
    amount: 650,
    paymentMethod: "Cash",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-03 01:30 PM",
    notes: "Office team lunch.",
    isSample: true,
  },
  {
    id: "VV-2026-1017",
    customerName: "Pooja Reddy",
    phone: "+91 97400 11998",
    items: [
      { name: "Chilli Baby Corn", quantity: 1, price: 210 },
      { name: "Paneer Paratha", quantity: 2, price: 110 },
      { name: "Sweet Punjabi Lassi", quantity: 1, price: 65 }
    ],
    orderType: "Takeaway",
    amount: 495,
    paymentMethod: "UPI (PhonePe)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-03 07:50 PM",
    notes: "",
    isSample: true,
  },
  {
    id: "VV-2026-1018",
    customerName: "Raghavendra Rao",
    phone: "+91 99011 22334",
    items: [
      { name: "Ghee Thatte Idli (2 Pcs)", quantity: 2, price: 60 },
      { name: "Crispy Medu Vada (2 Pcs)", quantity: 2, price: 55 },
      { name: "Traditional South Indian Filter Coffee", quantity: 2, price: 30 }
    ],
    orderType: "Dine-in",
    tableNo: "Table 5",
    amount: 290,
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    date: "2026-11-02 08:15 AM",
    notes: "Filter coffee very hot.",
    isSample: true,
  },
];

export const sampleTransactions = [
  { id: "TXN-9021", date: "2026-11-06 08:32 AM", orderId: "VV-2026-1001", method: "UPI (Google Pay)", amount: 210, status: "Paid" },
  { id: "TXN-9022", date: "2026-11-06 09:16 AM", orderId: "VV-2026-1002", method: "Cash", amount: 290, status: "Paid" },
  { id: "TXN-9023", date: "2026-11-06 01:21 PM", orderId: "VV-2026-1003", method: "Card", amount: 975, status: "Paid" },
  { id: "TXN-9024", date: "2026-11-06 01:46 PM", orderId: "VV-2026-1004", method: "UPI (PhonePe)", amount: 520, status: "Paid" },
  { id: "TXN-9025", date: "2026-11-06 02:11 PM", orderId: "VV-2026-1005", method: "Cash on Counter", amount: 430, status: "Paid" },
  { id: "TXN-9026", date: "2026-11-06 02:32 PM", orderId: "VV-2026-1006", method: "UPI (Paytm)", amount: 615, status: "Paid" },
  { id: "TXN-9027", date: "2026-11-06 03:00 PM", orderId: "VV-2026-1009", method: "Cash on Delivery", amount: 600, status: "Pending" },
  { id: "TXN-9018", date: "2026-11-05 07:47 PM", orderId: "VV-2026-1007", method: "Card", amount: 385, status: "Paid" },
  { id: "TXN-9019", date: "2026-11-05 08:16 PM", orderId: "VV-2026-1008", method: "UPI (Google Pay)", amount: 630, status: "Paid" },
  { id: "TXN-9020", date: "2026-11-05 01:12 PM", orderId: "VV-2026-1010", method: "UPI (PhonePe)", amount: 330, status: "Paid" },
  { id: "TXN-9015", date: "2026-11-04 08:42 PM", orderId: "VV-2026-1012", method: "Card", amount: 645, status: "Paid" },
  { id: "TXN-9012", date: "2026-11-03 09:25 PM", orderId: "VV-2026-1015", method: "Card", amount: 525, status: "Refunded" },
];

export const demoChartData = {
  dailyOrders: [
    { day: "Sat", orders: 28, revenue: 11450 },
    { day: "Sun", orders: 36, revenue: 16800 },
    { day: "Mon", orders: 19, revenue: 7850 },
    { day: "Tue", orders: 22, revenue: 8900 },
    { day: "Wed", orders: 21, revenue: 8400 },
    { day: "Thu", orders: 24, revenue: 9950 },
    { day: "Fri (Today)", orders: 26, revenue: 11200 },
  ],
  typeDistribution: [
    { type: "Dine-in", percentage: 48, count: 84 },
    { type: "Takeaway", percentage: 32, count: 56 },
    { type: "Delivery", percentage: 20, count: 35 },
  ]
};

