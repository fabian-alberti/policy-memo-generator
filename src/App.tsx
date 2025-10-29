import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { ClipboardList, ChevronLeft, ChevronRight, GripVertical, Sparkles } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPolicyOption, setSelectedPolicyOption] = useState(1)
  const [expandedSections, setExpandedSections] = useState({
    executiveSummary: true,
    background: false,
    policyOptions: false,
    recommendation: false,
    implementationStrategy: false
  })

  const [memoTitle] = useState("Rising Costs of the German Social Welfare System: Challenges and Strategic Reforms")
  const [topicDetails] = useState("The Minister has requested this memo in preparation for the upcoming Budget Committee hearing on November 15th, where she will present the Ministry's position on social spending reforms. The memo should provide a balanced analysis that can inform both internal ministry discussions and potential talking points for parliamentary debates. Focus on evidence-based options that are")
  const [addressee] = useState("Fed. Ministry of Labour and Social Affairs - Bärbel Bas")
  const [lengthValue] = useState("2")
  const [lengthUnit] = useState("Pages")
  const [references] = useState([
    "Federal Statistical Office (Destatis) - Social Budget 2024 Report",
    "OECD Economic Survey Germany 2024 - Social Spending Analysis",
    "Bundesministerium für Arbeit und Soziales - Sozialbericht 2024"
  ])
  const [memoStructure] = useState([
    { title: "Executive Summary", description: "Overview of social welfare cost drivers and urgency for refor..." },
    { title: "Background", description: "Analysis of budget trends, demographic shifts, and expendi..." },
    { title: "Policy Options", description: "Aging population, healthcare inflation, pension obligations..." },
    { title: "Recommendation", description: "Prioritized action plan with timeline and expected fiscal impa..." },
    { title: "Implementation Strategy", description: "Stakeholder engagement, legislative steps, and communicat..." }
  ])

  const policyOptions = [
    {
      id: 1,
      title: "Policy Option",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
      references: ["Report_1.de", "Report_2.pdf"]
    },
    {
      id: 2,
      title: "Policy Option",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
      references: ["Report_3.de", "Report_4.pdf"]
    },
    {
      id: 3,
      title: "Policy Option",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      references: ["Report_5.de"]
    },
    {
      id: 4,
      title: "Policy Option",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      references: ["Report_6.de", "Report_7.pdf"]
    },
    {
      id: 5,
      title: "Policy Option",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.",
      references: ["Report_8.de"]
    }
  ]

  const [selectedOptions, setSelectedOptions] = useState([1])
  const [recommendedOption, setRecommendedOption] = useState(1)

  const [draftSections] = useState({
    executiveSummary: {
      title: "Executive Summary",
      content: "Germany's social welfare system faces unprecedented fiscal pressures, with annual expenditures reaching €1.19 trillion in 2023. This memo analyzes the primary cost drivers and presents three strategic reform pathways. Key findings indicate that without intervention, contribution rates will increase by 2.1 percentage points by 2035, threatening economic competitiveness. The recommended approach combines efficiency improvements, targeted means-testing, and gradual parametric adjustments to ensure long-term sustainability while preserving core social protections.",
      feedback: ""
    },
    background: {
      title: "Background",
      content: "Social expenditure has grown from 29.1% of GDP in 2015 to 31.6% in 2023, significantly outpacing economic growth. The pension insurance system currently serves 21 million beneficiaries, with projections showing this number increasing to 23.5 million by 2035 as baby boomers retire. Statutory health insurance costs have risen at an average annual rate of 4.2%, driven by medical innovation, demographic aging, and increased utilization. Long-term care insurance expenditure reached €53 billion in 2023, with the number of care recipients growing from 3.4 million to a projected 5.2 million by 2040. The Bürgergeld system supports 5.5 million recipients at an annual cost of €42 billion.",
      feedback: ""
    },
    policyOptions: {
      title: "Policy Options",
      content: "Three reform pathways emerge from international benchmarking and domestic feasibility analysis:\n\nOption A - Efficiency-focused: Digitalization of administrative processes (projected savings: €3-5bn), enhanced fraud prevention, and cross-system data integration. This approach minimizes political resistance but delivers limited fiscal impact.\n\nOption B - Parametric adjustment: Gradual increase in retirement age aligned with life expectancy (0.5 months per year), adjusted indexation formulas for benefits, and introduction of means-testing for higher-income pensioners. Expected fiscal relief: €15-20bn annually by 2030.\n\nOption C - Structural reform: Transition toward partial capital funding for pensions, consolidated health and care insurance, and activity-based social assistance. Highest fiscal impact (€25-30bn) but requires legislative supermajority and extended implementation timeline.",
      feedback: ""
    },
    recommendation: {
      title: "Recommendation",
      content: "The Ministry recommends a phased hybrid approach combining elements of Options A and B:\n\nPhase 1 (2024-2026): Immediate implementation of efficiency measures and administrative digitalization. Establish expert commission for parametric reform design. Expected savings: €4bn annually.\n\nPhase 2 (2027-2030): Introduction of adjusted indexation formulas and gradual retirement age alignment. Launch pilot programs for means-testing. Expected savings: €12bn annually by 2030.",
      feedback: ""
    },
    implementationStrategy: {
      title: "Implementation Strategy",
      content: "Success requires coordinated action across multiple dimensions:\n\nStakeholder engagement: Consultation rounds with social partners, länder governments, and affected organizations (Timeline: Q4 2024 - Q1 2025). Public communication campaign emphasizing...",
      feedback: ""
    }
  })

  const finalVersion = `Executive Summary
Germany's social welfare system faces unprecedented fiscal pressures, with annual expenditures reaching €1.19 trillion in 2023. This memo analyzes the primary cost drivers and presents three strategic reform pathways. Key findings indicate that without intervention, contribution rates will increase by 2.1 percentage points by 2035, threatening economic competitiveness. The recommended approach combines efficiency improvements, targeted means-testing, and gradual parametric adjustments to ensure long-term sustainability while preserving core social protections.

Background
Social expenditure has grown from 29.1% of GDP in 2015 to 31.6% in 2023, significantly outpacing economic growth. The pension insurance system currently serves 21 million beneficiaries, with projections showing this number increasing to 23.5 million by 2035 as baby boomers retire. Statutory health insurance costs have risen at an average annual rate of 4.2%, driven by medical innovation, demographic aging, and increased utilization. Long-term care insurance expenditure reached €53 billion in 2023, with the number of care recipients growing from 3.4 million to a projected 5.2 million by 2040. The Bürgergeld system supports 5.5 million recipients at an annual cost of €42 billion.

Policy Options
Three reform pathways emerge from international benchmarking and domestic feasibility analysis:

Option A - Efficiency-focused: Digitalization of administrative processes (projected savings: €3-5bn), enhanced fraud prevention, and cross-system data integration. This approach minimizes political resistance but delivers limited fiscal impact.

Option B - Parametric adjustment: Gradual increase in retirement age aligned with life expectancy (0.5 months per year), adjusted indexation formulas for benefits, and introduction of means-testing for higher-income pensioners. Expected fiscal relief: €15-20bn annually by 2030.

Option C - Structural reform: Transition toward partial capital funding for pensions, consolidated health and care insurance, and activity-based social assistance. Highest fiscal impact (€25-30bn) but requires legislative supermajority and extended implementation timeline.

Recommendation
The Ministry recommends a phased hybrid approach combining elements of Options A and B:

Phase 1 (2024-2026): Immediate implementation of efficiency measures and administrative digitalization. Establish expert commission for parametric reform design. Expected savings: €4bn annually.

Phase 2 (2027-2030): Introduction of adjusted indexation formulas and gradual retirement age alignment. Launch pilot programs for means-testing. Expected savings: €12bn annually by 2030.`

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-10 h-10 text-green-700" />
            <h1 className="text-4xl font-bold">Policy Memo Generator</h1>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="flex items-center gap-0 mb-8">
          <button
            onClick={() => goToStep(1)}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              currentStep === 1
                ? 'bg-green-700 text-white rounded-l-full'
                : 'bg-gray-300 text-gray-700 rounded-l-full hover:bg-gray-400'
            }`}
          >
            Enter Details
          </button>
          <button
            onClick={() => goToStep(2)}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              currentStep === 2
                ? 'bg-green-700 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            Select Options
          </button>
          <button
            onClick={() => goToStep(3)}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              currentStep === 3
                ? 'bg-green-700 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            Edit Draft
          </button>
          <button
            onClick={() => goToStep(4)}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              currentStep === 4
                ? 'bg-green-700 text-white rounded-r-full'
                : 'bg-gray-300 text-gray-700 rounded-r-full hover:bg-gray-400'
            }`}
          >
            Finalize
          </button>
        </div>

        {/* Step 1: Enter Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Memo Title<span className="text-red-500">*</span>
              </label>
              <Input
                value={memoTitle}
                className="w-full"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Topic Details</label>
              <Textarea
                value={topicDetails}
                className="w-full min-h-32"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Addressee<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <Select value={addressee}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={addressee}>{addressee}</SelectItem>
                  </SelectContent>
                </Select>
                <button className="text-green-700 text-sm whitespace-nowrap">+ Add Addressee</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Length Requirement<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <Input
                  value={lengthValue}
                  className="flex-1"
                  readOnly
                />
                <Select value={lengthUnit}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pages">Pages</SelectItem>
                    <SelectItem value="Words">Words</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                References<span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {references.map((ref, index) => (
                  <Input
                    key={index}
                    value={ref}
                    className="w-full"
                    readOnly
                  />
                ))}
              </div>
              <button className="text-green-700 text-sm mt-2">+ Add Reference</button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Memo Structure</label>
              <div className="border border-gray-300 rounded-md p-4 space-y-2 max-h-64 overflow-y-auto">
                {memoStructure.map((section, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded">
                    <GripVertical className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold">{section.title}</div>
                      <div className="text-sm text-gray-600">{section.description}</div>
                    </div>
                    <button className="text-gray-400">⋮</button>
                  </div>
                ))}
              </div>
              <button className="text-green-700 text-sm mt-2">+ Add Section</button>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                onClick={nextStep}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-2"
              >
                Generate
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Select Options */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Policy Options Tabs */}
            <div className="border border-gray-300 rounded-md">
              <div className="flex items-center bg-gray-100 border-b border-gray-300">
                <button className="p-2 hover:bg-gray-200">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex-1 flex items-center justify-center gap-8 py-3">
                  {policyOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedPolicyOption(option.id)}
                      className={`text-sm ${
                        selectedPolicyOption === option.id
                          ? 'text-green-700 font-semibold underline'
                          : 'text-gray-700'
                      }`}
                    >
                      {option.id}) {option.title}
                    </button>
                  ))}
                </div>
                <button className="p-2 hover:bg-gray-200">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Selected Policy Option Content */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{selectedPolicyOption}) Policy Option</h2>
              <p className="text-gray-700 leading-relaxed">
                {policyOptions[selectedPolicyOption - 1].content}
              </p>

              <div>
                <p className="font-semibold mb-2">References:</p>
                <div className="space-y-1">
                  {policyOptions[selectedPolicyOption - 1].references.map((ref, index) => (
                    <a key={index} href="#" className="block text-blue-600 hover:underline">
                      {ref}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedOptions.includes(selectedPolicyOption)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedOptions([...selectedOptions, selectedPolicyOption])
                      } else {
                        setSelectedOptions(selectedOptions.filter(id => id !== selectedPolicyOption))
                      }
                    }}
                    className="data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700"
                  />
                  <label className="text-sm font-medium">Select as Policy Option</label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={recommendedOption === selectedPolicyOption}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setRecommendedOption(selectedPolicyOption)
                      }
                    }}
                    className="data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700"
                  />
                  <label className="text-sm font-medium">Select as Recommended Option</label>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                onClick={nextStep}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-2"
              >
                Generate Draft
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Edit Draft */}
        {currentStep === 3 && (
          <div className="space-y-4">
            {Object.entries(draftSections).map(([key, section]) => (
              <Collapsible
                key={key}
                open={expandedSections[key as keyof typeof expandedSections]}
                onOpenChange={() => toggleSection(key)}
                className="border border-gray-300 rounded-md"
              >
                <div className="flex items-center justify-between p-4 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <GripVertical className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold">{section.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="bg-green-700 hover:bg-green-800 text-white text-xs"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Refine
                    </Button>
                    <CollapsibleTrigger className="p-1">
                      <span className="text-xl">{expandedSections[key as keyof typeof expandedSections] ? '∧' : '∨'}</span>
                    </CollapsibleTrigger>
                  </div>
                </div>
                <CollapsibleContent>
                  <div className="p-4 space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Feedback for AI Adjustments</label>
                      <Textarea
                        placeholder="e.g. make it more concise,..."
                        className="w-full text-sm"
                        rows={2}
                      />
                    </div>
                    <Textarea
                      value={section.content}
                      className="w-full min-h-32"
                      readOnly
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}

            <div className="flex justify-center pt-4">
              <Button
                onClick={nextStep}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-2"
              >
                Finalize
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Finalize */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Final Version</h2>
            <div className="border border-gray-300 rounded-md p-6 max-h-96 overflow-y-auto bg-white">
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {finalVersion}
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button
                variant="outline"
                className="px-8 py-2 border-gray-300"
              >
                Save
              </Button>
              <Button
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-2"
              >
                Export
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
