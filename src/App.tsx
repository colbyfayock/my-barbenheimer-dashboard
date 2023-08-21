import { Card, Metric, Text, Title, DonutChart, LineChart } from "@tremor/react";

import './App.css'

import dataBarbie from './movie-barbie.json';
import dataOppenheimer from './movie-oppenheimer.json';

const chartData = dataBarbie.domestic_daily.map(({ revenue, date }) => {
  const oppenheimer = dataOppenheimer.domestic_daily.find(opp => opp.date === date);
  return {
    date,
    Barbie: revenue,
    Oppenheimer: oppenheimer?.revenue
  }
})

function addCommasToNumber(number: number) {
  // Convert the number to a string
  let numString = number.toString();
  
  // Use regex to add commas to the string representation of the number
  numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return numString;
}

function App() {
  return (
    <div className="text-left">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Barbie</h2>
          <Card className="max-w-lg mb-6">
            <Title>Sales</Title>
            <DonutChart
              className="mt-6 mb-6"
              data={[
                {
                  name: 'false',
                  userScore: dataBarbie.vote_average,
                },
                {
                  name: 'false',
                  userScore: 10 - dataBarbie.vote_average,
                }
              ]}
              category="userScore"
              index="name"
              colors={["green", "slate"]}
              label={`${(dataBarbie.vote_average * 10).toFixed()}%`}
            />
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Revenue</Text>
            <Metric>${ addCommasToNumber(dataBarbie.global_revenue) }</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${ addCommasToNumber(dataBarbie.budget) }</Metric>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Oppenheimer</h2>
          <Card className="max-w-lg mb-6">
            <Title>Sales</Title>
            <DonutChart
              className="mt-6 mb-6"
              data={[
                {
                  name: 'false',
                  userScore: dataOppenheimer.vote_average,
                },
                {
                  name: 'false',
                  userScore: 10 - dataOppenheimer.vote_average,
                }
              ]}
              category="userScore"
              index="name"
              colors={["green", "slate"]}
              label={`${(dataOppenheimer.vote_average * 10).toFixed()}%`}
            />
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Revenue</Text>
            <Metric>${ addCommasToNumber(dataOppenheimer.global_revenue) }</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${ addCommasToNumber(dataOppenheimer.budget) }</Metric>
          </Card>
        </div>
      </div>
      <Card className="mt-8">
        <Title>Domestic Daily</Title>
        <LineChart
          className="mt-6"
          data={chartData}
          index="year"
          categories={["Barbie", "Oppenheimer"]}
          colors={["pink", "gray"]}
          yAxisWidth={120}
          valueFormatter={addCommasToNumber}
        />
      </Card>
    </div>
  )
}

export default App
