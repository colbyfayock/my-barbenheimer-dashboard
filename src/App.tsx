import { Card, Metric, Text, Title, DonutChart } from "@tremor/react";

import './App.css'

import dataBarbie from './movie-barbie.json';
import dataOppenheimer from './movie-oppenheimer.json';

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
            <Metric>${ dataBarbie.global_revenue }</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${ dataBarbie.budget }</Metric>
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
            <Metric>${ dataOppenheimer.global_revenue }</Metric>
          </Card>
          <Card className="max-w-xs mx-auto mb-6" decoration="top" decorationColor="indigo">
            <Text>Budget</Text>
            <Metric>${ dataOppenheimer.budget }</Metric>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
