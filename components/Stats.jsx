"use client";

export default function Stats() {
  return (
    <section className="min-h-screen bg-[#fff8e7] px-4 py-16">
      <h1 className="text-4xl font-black text-center mb-10">
        Career Statistics
      </h1>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="w-full border-4 border-black bg-white text-center">
          <thead className="bg-gray-200 border-b-4 border-black">
            <tr>
              <th className="p-3 border-r-2 border-black">Competition</th>
              <th className="p-3 border-r-2 border-black">Test</th>
              <th className="p-3 border-r-2 border-black">ODI</th>
              <th className="p-3 border-r-2 border-black">T20I</th>
              <th className="p-3">FC</th>
            </tr>
          </thead>

          <tbody className="font-semibold">
            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Matches</td>
              <td>67</td>
              <td>279</td>
              <td>159</td>
              <td>129</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Runs scored</td>
              <td>4,301</td>
              <td>11,516</td>
              <td>4,231</td>
              <td>9,318</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Batting average</td>
              <td>40.57</td>
              <td>49.21</td>
              <td>32.05</td>
              <td>49.04</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">100s / 50s</td>
              <td>12 / 18</td>
              <td>33 / 61</td>
              <td>5 / 32</td>
              <td>29 / 38</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Top score</td>
              <td>212</td>
              <td>264</td>
              <td>121*</td>
              <td>309*</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Balls bowled</td>
              <td>383</td>
              <td>610</td>
              <td>68</td>
              <td>2,153</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Wickets</td>
              <td>2</td>
              <td>9</td>
              <td>1</td>
              <td>24</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Bowling average</td>
              <td>112.00</td>
              <td>59.22</td>
              <td>113.00</td>
              <td>48.08</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">
                5 wickets in innings
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">
                10 wickets in match
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-3 border-r-2 border-black">Best bowling</td>
              <td>1 / 26</td>
              <td>2 / 27</td>
              <td>1 / 22</td>
              <td>4 / 41</td>
            </tr>

            <tr>
              <td className="p-3 border-r-2 border-black">
                Catches / Stumpings
              </td>
              <td>68 / -</td>
              <td>102 / -</td>
              <td>65 / -</td>
              <td>112 / -</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
