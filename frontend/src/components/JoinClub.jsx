import { useState } from "react";
import Footer from "./Footer";
import API_URL from "../api";

const perks = [
  "Priority updates on events and service drives",
  "Access to member-only community sessions",
  "A stronger network of youth leaders and mentors",
];

const JoinClub = ({ onBack }) => {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Phone: "",
    Email: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleBackToHome = () => {
    if (typeof onBack === "function") {
      onBack();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    const payload = {
      Firstname: formData.Firstname.trim(),
      Lastname: formData.Lastname.trim(),
      Phone: formData.Phone.trim(),
      Email: formData.Email.trim(),
    };

    try {
      const response = await fetch(`${API_URL}/people`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data?.message || data?.sqlMessage || "Failed to save membership details.");
      }

      setStatus({ type: "success", message: "Membership submitted successfully! Welcome to Dignity Club." });
      setFormData({ Firstname: "", Lastname: "", Phone: "", Email: "" });
    } catch (error) {
      let errorMessage = error.message || "Something went wrong.";
      if (error.name === "TypeError" && errorMessage.toLowerCase().includes("fetch")) {
        errorMessage = "Unable to connect to the server. Please try again later.";
      }
      setStatus({ type: "error", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_45%,#eff6ff_100%)] text-black-main font-body flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-[1000] border-b border-black/5 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-lg font-extrabold tracking-tighter text-black-main md:text-2xl font-heading">
            <span className="text-primary-blue">Dignity</span>
            <span className="ml-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">Membership</span>
          </div>

          <button
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2 rounded-full border border-primary-blue px-4 py-2 text-[11px] font-semibold text-primary-blue transition-all duration-300 hover:bg-primary-blue hover:text-white-main sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
          >
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-primary-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-blue">Join the movement</span>
            <h1 className="text-4xl font-black tracking-tight text-black-main md:text-5xl lg:text-6xl font-heading">Become a Dignity Club member and lead with purpose.</h1>
            <p className="max-w-xl text-lg text-gray-600 md:text-xl">Create your profile, connect with young leaders, and help shape dignity-focused events that uplift your community.</p>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {perks.map((perk) => (
                <article key={perk} className="rounded-3xl border border-gray-200 bg-white/90 p-5 text-left shadow-sm shadow-primary-blue/5 ring-1 ring-white/80">
                  <p className="text-sm text-gray-700">{perk}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-[0_20px_50px_rgba(0,102,255,0.12)] ring-1 ring-white/80 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-blue">Membership form</p>
                <h2 className="mt-2 text-2xl font-bold text-black-main font-heading">Start your journey</h2>
              </div>
              <div className="rounded-2xl bg-primary-blue/10 px-3 py-2 text-xs font-semibold text-primary-blue">Free to join</div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  First name
                  <input
                    name="Firstname"
                    value={formData.Firstname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Aline"
                    required
                    className="mt-1 w-full rounded-2xl border border-gray-200 bg-gray-light px-4 py-3 text-sm text-black-main outline-none transition focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-primary-blue/20"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                  <input
                    name="Lastname"
                    value={formData.Lastname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Uwase"
                    required
                    className="mt-1 w-full rounded-2xl border border-gray-200 bg-gray-light px-4 py-3 text-sm text-black-main outline-none transition focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-primary-blue/20"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-gray-700">
                Phone
                <input
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="0780000000"
                  required
                  className="mt-1 w-full rounded-2xl border border-gray-200 bg-gray-light px-4 py-3 text-sm text-black-main outline-none transition focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-primary-blue/20"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full rounded-2xl border border-gray-200 bg-gray-light px-4 py-3 text-sm text-black-main outline-none transition focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-primary-blue/20"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-primary-blue px-5 py-3 text-sm font-semibold text-white-main transition-all duration-300 hover:bg-secondary-blue hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,102,255,0.20)] cursor-pointer disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Join Dignity Club"}
              </button>
            </form>

            {status.message ? (
              <div className={`mt-4 p-3.5 rounded-2xl border text-sm font-medium ${status.type === "success" ? "bg-green-500/10 border-green-500/20 text-green-700" : "bg-red-500/10 border-red-500/20 text-red-700"}`}>
                {status.message}
              </div>
            ) : null}

            <p className="mt-4 text-xs text-gray-500">By joining, you agree to receive updates and invitations from Dignity Club.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinClub;
