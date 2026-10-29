// TEST project (goionmhlyaxtikapljes). Do not point this at the live project until the
// slot_booking_system and student_credentials_separation migrations are applied there.
const SUPABASE_URL = "https://goionmhlyaxtikapljes.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_m-RLzMQ-Qp23vK27JGTFHg_cX2skEmz";

// admin.html sets window.SB_AUTH_STORAGE_KEY so the staff login is stored apart from the
// student portal's short-lived OTP/Google sessions (same origin, different keys).
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY,
  window.SB_AUTH_STORAGE_KEY ? { auth: { storageKey: window.SB_AUTH_STORAGE_KEY } } : {});
