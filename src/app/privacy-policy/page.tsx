import React from "react";

const data = [
  {
    title: "1. What We Collect",
    value: (
      <>
        <p>When you join the waitlist, we collect:</p>
        <ul className="ml-5 list-decimal">
          <li>Your name</li>
          <li>Your email address</li>
        </ul>
        <p className="mt-2">That’s it.</p>
      </>
    ),
  },
  {
    title: "2. Why We Collect It",
    value: (
      <>
        <p>We use this information to:</p>
        <ul className="ml-5 list-decimal">
          <li>Notify you when the app launches</li>
          <li>Share updates or early access</li>
          <li>Improve communication and future features</li>
        </ul>
        <p className="mt-2">
          We don’t sell or share your data with third parties.
        </p>
      </>
    ),
  },
  {
    title: "3. Data Security",
    value: (
      <p>
        Your information is stored securely. We take privacy seriously and use
        appropriate measures to protect it.
      </p>
    ),
  },
  {
    title: "4. Your Control",
    value: (
      <p>
        You can unsubscribe from updates anytime. Just click the unsubscribe
        link or contact us directly to remove your info.
      </p>
    ),
  },
  {
    title: "5. Minimal Third-Party Use",
    value: (
      <p>
        We may use basic tools like form or email services to help manage the
        waitlist. These services only handle what’s necessary and follow
        standard privacy practices.
      </p>
    ),
  },
  {
    title: "6. Questions?",
    value: (
      <p>
        Reach out at{" "}
        <a
          href="mailto:getaktiv.app@gmail.com"
          className="text-base font-normal underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          getaktiv.app@gmail.com
        </a>
      </p>
    ),
  },
] as { title: string; value: React.ReactNode }[];

const Pair = ({ label, value }: { label: string; value: React.ReactNode }) => {
  return (
    <div className="space-y-2">
      <h4 className="font-poppins text-lg font-medium">{label}</h4>
      <div className="whitespace-pre-line text-base font-normal">{value}</div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 px-[80px] pb-16 pt-[calc(68px+85px)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-semibold text-[#3399FF]">
          Privacy Policy
        </h1>
        <p className="text-base font-normal">
          At Aktiv, your privacy matters. This page explains what we collect,
          why we collect it, and how we protect it.
        </p>
      </div>

      {data.map((item, index) => (
        <Pair key={index} label={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default Page;
