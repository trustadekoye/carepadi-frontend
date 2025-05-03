const Pricing = () => {
  return (
    <div className="w-full py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
          Over A Decade Of Experience doctors for
          <br />
          the most ridiculous price
        </h2>
      </div>

      {/* Pricing Cards Container */}
      <div
        className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center"
        style={{ minHeight: "650px" }}
      >
        {/* Quick Care Card */}
        <div className="w-full md:w-1/3 bg-[#2C3B8B] text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="p-20 flex-grow flex flex-col">
            <div className="mb-6">
              <h3 className="text-4xl font-normal mb-3 text-center">₦4,999</h3>
              <h4 className="text-xl font-normal mb-4 text-center">
                Quick Care
              </h4>
              <p className="text-gray-200 text-sm text-center">
                Ideal for on-off consultations
              </p>
            </div>

            <div className="mt-auto">
              <ul className="space-y-4">
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">One-time appointment</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">No commitments</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">
                    Access to verified doctors
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 pt-8">
            <button className="w-full bg-white text-[#2C3B8B] py-3 font-normal hover:bg-gray-100 transition-colors cursor-pointer">
              Select Plan
            </button>
          </div>
        </div>

        {/* Care free Card */}
        <div className="w-full md:w-1/3 bg-[#F7F4F1] text-[#2C3B8B] rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="p-20 flex-grow flex flex-col">
            <div className="mb-6">
              <h3 className="text-4xl font-normal mb-3 text-center">₦9,999</h3>
              <h4 className="text-xl font-normal mb-4 text-center">
                Care free
              </h4>
              <p className="text-[#2C3B8B] text-sm text-center">
                Ideal of cronic patients, families, remote users
              </p>
            </div>

            <div className="mt-auto">
              <ul className="space-y-4">
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">Unlimited bookings</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">Priority scheduling</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">Chat support</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">Family sharing available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 pt-8">
            <button className="w-full bg-[#2C3B8B] text-white py-3 font-normal hover:bg-[#2C3B8B]/90 transition-colors cursor-pointer">
              Select Plan
            </button>
          </div>
        </div>

        {/* Care Pulse Card */}
        <div className="w-full md:w-1/3 bg-[#2C3B8B] text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="p-20 flex-grow flex flex-col">
            <div className="mb-6">
              <h3 className="text-4xl font-normal mb-3 text-center">₦6,999</h3>
              <h4 className="text-xl font-normal mb-4 text-center">
                Care Pulse
              </h4>
              <p className="text-white text-sm text-center">
                Ideal for urgent, unplanned, health concerns
              </p>
            </div>

            <div className="mt-auto">
              <ul className="space-y-4">
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">
                    Immediate access to an emergency doctor
                  </span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">24/7 hotlines</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-lg mr-2">•</span>
                  <span className="font-normal">Chat support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 pt-8">
            <button className="w-full bg-white text-[#2C3B8B] py-3 font-normal hover:bg-gray-200 transition-colors cursor-pointer">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
