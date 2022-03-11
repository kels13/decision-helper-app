import React from 'react'
import { Link } from "react-router-dom";


export const About = () => {
  return (
    <div>
        <Link to="/" className='back-button'>Back</Link>
        <h1>About Decision Helper App</h1>
        <h2>Client-side Application</h2>
        <p>When writing client-side JavaScript for web sites or applications, you will quickly encounter Application Programming Interfaces (<abbr>APIs</abbr>). APIs are programming features for manipulating different aspects of the browser and operating system the site is running on, or manipulating data from other web sites or services. In this module, we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work.</p>
        <h2>Based on the Analytic hierarchy process (<abbr>AHP</abbr>)</h2>        
        <p>As can be seen in the material that follows, using the AHP involves the mathematical synthesis of numerous judgments about the decision problem at hand. It is not uncommon for these judgments to number in the dozens or even the hundreds. While the math can be done by hand or with a calculator, it is far more common to use one of several computerized methods for entering and synthesizing the judgments. The simplest of these involve standard spreadsheet software, while the most complex use custom software, often augmented by special devices for acquiring the judgments of decision makers gathered in a meeting room.
        </p>
        <p>The procedure for using the AHP can be summarized as:</p>
        <ol>
          <li>Model the problem as a hierarchy containing the decision goal, the alternatives for reaching it, and the criteria for evaluating the alternatives.</li>
          <li>Establish priorities among the elements of the hierarchy by making a series of judgments based on pairwise comparisons of the elements. For example, when comparing potential purchases of commercial real estate, the investors might say they prefer location over price and price over timing.</li>
          <li>Synthesize these judgments to yield a set of overall priorities for the hierarchy. This would combine the investors' judgments about location, price and timing for properties A, B, C, and D into overall priorities for each property.</li>
          <li>Check the consistency of the judgments.</li>
          <li>Come to a final decision based on the results of this process.</li>
        </ol>

    </div>
  )
}
