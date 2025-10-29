import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { ClipboardList, ChevronLeft, ChevronRight, GripVertical, Sparkles, FileText, ExternalLink, ChevronUp, ChevronDown, X } from 'lucide-react'
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
  const [addressee, setAddressee] = useState("Fed. Ministry of Labour and Social Affairs - Bärbel Bas")
  
  const addresseeOptions = [
    "Fed. Ministry of Labour and Social Affairs - Bärbel Bas",
    "Fed. Ministry of Finance - Lars Klingbeil",
    "Fed. Ministry of Health - Nina Warken",
    "Fed. Ministry of the Interior - Alexander Dobrindt",
    "Fed. Ministry of Economic Affairs and Energy - Katherina Reiche"
  ]
  const [lengthValue] = useState("2")
  const [lengthUnit] = useState("Pages")
  const [references] = useState([
    { type: 'pdf', name: 'OECD - Pension System Reform Models in European Countries (2024).pdf' },
    { type: 'pdf', name: 'Bundesministerium - Consolidation Framework for Social Insurance Systems.pdf' },
    { type: 'link', name: 'https://www.bmas.de/sozialversicherung-strukturreform' },
    { type: 'pdf', name: 'Destatis - Life Expectancy and Retirement Age Analysis 2024.pdf' },
    { type: 'pdf', name: 'IW Köln - Means-Testing Models for Pension Systems.pdf' },
    { type: 'link', name: 'https://www.destatis.de/rente-altersgrenze' },
    { type: 'pdf', name: 'Digitalisierung im Sozialwesen - Effizienzsteigerung durch IT.pdf' },
    { type: 'link', name: 'https://www.digitalisierung-bmas.de/verwaltungsoptimierung' },
    { type: 'pdf', name: 'BMF - Solidarity Levy Framework and Revenue Projections.pdf' },
    { type: 'pdf', name: 'Ifo Institut - Impact Analysis of Contribution Rate Increases.pdf' },
    { type: 'link', name: 'https://www.bundesfinanzministerium.de/beitragssaetze' },
    { type: 'pdf', name: 'Paritätischer Wohlfahrtsverband - Impact Assessment of Benefit Freezes.pdf' },
    { type: 'link', name: 'https://www.sozialverband.de/leistungsstopp-analysen' }
  ])
  const [memoStructure, setMemoStructure] = useState([
    { id: 1, title: "Executive Summary", description: "Overview of social welfare cost drivers and urgency for refor...", selected: true },
    { id: 2, title: "Background", description: "Analysis of budget trends, demographic shifts, and expendi...", selected: true },
    { id: 3, title: "Policy Options", description: "Aging population, healthcare inflation, pension obligations...", selected: true },
    { id: 4, title: "Recommendation", description: "Prioritized action plan with timeline and expected fiscal impa...", selected: true },
    { id: 5, title: "Implementation Strategy", description: "Stakeholder engagement, legislative steps, and communicat...", selected: true }
  ])
  const moveSectionUp = (index: number) => {
    if (index === 0) return
    const newStructure = [...memoStructure]
    const temp = newStructure[index]
    newStructure[index] = newStructure[index - 1]
    newStructure[index - 1] = temp
    setMemoStructure(newStructure)
  }

  const moveSectionDown = (index: number) => {
    if (index === memoStructure.length - 1) return
    const newStructure = [...memoStructure]
    const temp = newStructure[index]
    newStructure[index] = newStructure[index + 1]
    newStructure[index + 1] = temp
    setMemoStructure(newStructure)
  }

  const policyOptions = [
    {
      id: 1,
      title: "Structural Reform",
      content: "Shift toward partially funded pensions, consolidated health and care insurance, and activity-based social assistance.\n\n→ Highest fiscal relief (€25–30bn annually), but requires legislative supermajority and extended implementation timeline.",
      references: [
        { type: 'pdf', name: 'OECD - Pension System Reform Models in European Countries (2024).pdf' },
        { type: 'pdf', name: 'Bundesministerium - Consolidation Framework for Social Insurance Systems.pdf' },
        { type: 'link', name: 'https://www.bmas.de/sozialversicherung-strukturreform' }
      ]
    },
    {
      id: 2,
      title: "Parametric Adjustment",
      content: "Gradual increase in retirement age aligned with life expectancy, adjusted indexation formulas for benefits, and means-testing for higher-income pensioners.\n\n→ Strong fiscal impact (€15–20bn annually by 2030) while maintaining social fairness and long-term sustainability.",
      references: [
        { type: 'pdf', name: 'Destatis - Life Expectancy and Retirement Age Analysis 2024.pdf' },
        { type: 'pdf', name: 'IW Köln - Means-Testing Models for Pension Systems.pdf' },
        { type: 'link', name: 'https://www.destatis.de/rente-altersgrenze' }
      ]
    },
    {
      id: 3,
      title: "Efficiency-focused",
      content: "Digitalization of administrative processes, enhanced fraud prevention, and cross-system data integration.\n\n→ Minimizes political resistance and yields moderate savings (€3–5bn annually), though limited in structural effect.",
      references: [
        { type: 'pdf', name: 'Digitalisierung im Sozialwesen - Effizienzsteigerung durch IT.pdf' },
        { type: 'link', name: 'https://www.digitalisierung-bmas.de/verwaltungsoptimierung' }
      ]
    },
    {
      id: 4,
      title: "Revenue Expansion",
      content: "Increase social contribution rates by 0.5 percentage points and introduce a \"solidarity levy\" on capital income.\n\n→ Provides immediate fiscal relief but risks dampening growth and increasing the burden on younger generations.",
      references: [
        { type: 'pdf', name: 'BMF - Solidarity Levy Framework and Revenue Projections.pdf' },
        { type: 'pdf', name: 'Ifo Institut - Impact Analysis of Contribution Rate Increases.pdf' },
        { type: 'link', name: 'https://www.bundesfinanzministerium.de/beitragssaetze' }
      ]
    },
    {
      id: 5,
      title: "Benefit Moratorium",
      content: "Freeze pension and welfare benefit growth for two years while inflation compensation is reviewed.\n\n→ Achieves short-term savings but undermines trust and may heighten poverty among vulnerable groups.",
      references: [
        { type: 'pdf', name: 'Paritätischer Wohlfahrtsverband - Impact Assessment of Benefit Freezes.pdf' },
        { type: 'link', name: 'https://www.sozialverband.de/leistungsstopp-analysen' }
      ]
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
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Header */}
      <div className="bg-green-600 border-b-4 border-green-800 py-3">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Policy Memo Generator</h1>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <table className="w-full mb-6 border-collapse" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="w-1/4">
          <button
            onClick={() => goToStep(1)}
                  className={`w-full py-2 px-3 font-bold text-sm border-2 ${
              currentStep === 1
                      ? 'text-white'
                      : 'bg-gray-300 text-black border-gray-500 border-t-gray-400 border-l-gray-400 hover:bg-gray-400'
                  }`}
                  style={{ 
                    ...(currentStep === 1 && {
                      backgroundColor: '#008030',
                      border: '2px solid #006020',
                      borderTop: '2px solid #00a040',
                      borderLeft: '2px solid #00a040'
                    }),
                    boxShadow: currentStep === 1 ? 'inset 1px 1px 2px rgba(0,0,0,0.3)' : '2px 2px 4px rgba(0,0,0,0.2)',
                    cursor: 'pointer'
                  }}
          >
            Enter Details
          </button>
              </td>
              <td className="w-1/4">
          <button
            onClick={() => goToStep(2)}
                  className={`w-full py-2 px-3 font-bold text-sm border-2 ${
              currentStep === 2
                      ? 'text-white'
                      : 'bg-gray-300 text-black border-gray-500 border-t-gray-400 border-l-gray-400 hover:bg-gray-400'
                  }`}
                  style={{ 
                    ...(currentStep === 2 && {
                      backgroundColor: '#008030',
                      border: '2px solid #006020',
                      borderTop: '2px solid #00a040',
                      borderLeft: '2px solid #00a040'
                    }),
                    boxShadow: currentStep === 2 ? 'inset 1px 1px 2px rgba(0,0,0,0.3)' : '2px 2px 4px rgba(0,0,0,0.2)',
                    cursor: 'pointer'
                  }}
          >
            Select Options
          </button>
              </td>
              <td className="w-1/4">
          <button
            onClick={() => goToStep(3)}
                  className={`w-full py-2 px-3 font-bold text-sm border-2 ${
              currentStep === 3
                      ? 'text-white'
                      : 'bg-gray-300 text-black border-gray-500 border-t-gray-400 border-l-gray-400 hover:bg-gray-400'
                  }`}
                  style={{ 
                    ...(currentStep === 3 && {
                      backgroundColor: '#008030',
                      border: '2px solid #006020',
                      borderTop: '2px solid #00a040',
                      borderLeft: '2px solid #00a040'
                    }),
                    boxShadow: currentStep === 3 ? 'inset 1px 1px 2px rgba(0,0,0,0.3)' : '2px 2px 4px rgba(0,0,0,0.2)',
                    cursor: 'pointer'
                  }}
          >
            Edit Draft
          </button>
              </td>
              <td className="w-1/4">
          <button
            onClick={() => goToStep(4)}
                  className={`w-full py-2 px-3 font-bold text-sm border-2 ${
              currentStep === 4
                      ? 'text-white'
                      : 'bg-gray-300 text-black border-gray-500 border-t-gray-400 border-l-gray-400 hover:bg-gray-400'
                  }`}
                  style={{ 
                    ...(currentStep === 4 && {
                      backgroundColor: '#008030',
                      border: '2px solid #006020',
                      borderTop: '2px solid #00a040',
                      borderLeft: '2px solid #00a040'
                    }),
                    boxShadow: currentStep === 4 ? 'inset 1px 1px 2px rgba(0,0,0,0.3)' : '2px 2px 4px rgba(0,0,0,0.2)',
                    cursor: 'pointer'
                  }}
          >
            Finalize
          </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Step 1: Enter Details */}
        {currentStep === 1 && (
          <div className="bg-white border-2 border-gray-400 p-4" style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)' }}>
            <div className="space-y-4">
            <div>
                <label className="block text-sm font-bold mb-1 text-black">
                  Memo Title<span className="text-red-600 ml-1">*</span>
              </label>
                <input
                  type="text"
                value={memoTitle}
                readOnly
                  className="w-full px-2 py-1 border-2 border-gray-400 bg-white"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div>
                <label className="block text-sm font-bold mb-1 text-black">Topic Details</label>
                <textarea
                value={topicDetails}
                readOnly
                  rows={6}
                  className="w-full px-2 py-1 border-2 border-gray-400 bg-white resize-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div>
                <label className="block text-sm font-bold mb-1 text-black">
                  Addressee<span className="text-red-600 ml-1">*</span>
              </label>
              <div className="flex items-center gap-2">
                  <select 
                    value={addressee}
                    onChange={(e) => setAddressee(e.target.value)}
                    className="flex-1 px-2 py-1 border-2 border-gray-400 bg-white"
                    style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                  >
                    {addresseeOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <button 
                    className="px-3 py-1 text-white border-2 font-bold text-xs whitespace-nowrap"
                    style={{ 
                      backgroundColor: '#008030', 
                      borderColor: '#006020',
                      boxShadow: '2px 2px 4px rgba(0,0,0,0.2)', 
                      cursor: 'pointer' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#008030'}
                  >
                    + Add Addressee
                  </button>
              </div>
            </div>

            <div>
                <label className="block text-sm font-bold mb-1 text-black">
                  Length Requirement<span className="text-red-600 ml-1">*</span>
              </label>
              <div className="flex gap-2">
                  <input
                    type="text"
                  value={lengthValue}
                  readOnly
                    className="w-20 px-2 py-1 border-2 border-gray-400 bg-white"
                    style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                  />
                  <select
                    value={lengthUnit}
                    className="px-2 py-1 border-2 border-gray-400 bg-white"
                    style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                  >
                    <option>Pages</option>
                    <option>Words</option>
                  </select>
              </div>
            </div>

            <div>
                <label className="block text-sm font-bold mb-1 text-black">
                  References<span className="text-red-600 ml-1">*</span>
              </label>
                <div className="space-y-2 border-2 border-gray-400 bg-gray-50 p-3" style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}>
                {references.map((ref, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white p-2 border border-gray-300">
                      {ref.type === 'pdf' ? (
                        <>
                          <FileText className="w-4 h-4 flex-shrink-0" style={{ color: '#d32f2f' }} />
                          <span className="text-sm text-black flex-1">{ref.name}</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: '#008030' }} />
                          <span className="text-sm text-black flex-1">{ref.name}</span>
                        </>
                      )}
                      <button
                        className="flex-shrink-0 p-0.5 text-gray-400 hover:text-red-600 transition-colors"
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#dc2626'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#9ca3af'
                        }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                ))}
              </div>
                <button 
                  className="underline text-sm mt-2"
                  style={{ color: '#008030', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#006020'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#008030'}
                >
                  + Add Reference
                </button>
            </div>

            <div>
                <label className="block text-sm font-bold mb-1 text-black">Memo Structure</label>
                <div className="border-2 border-gray-400 bg-gray-50 p-2 max-h-64 overflow-y-auto" style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)' }}>
                  <div className="space-y-1">
                {memoStructure.map((section, index) => (
                      <div
                        key={section.id}
                        className={`border border-gray-400 p-2 flex items-center gap-2 ${section.selected ? 'bg-white' : 'bg-gray-200 opacity-60'}`}
                      >
                        <div className="flex flex-col gap-0.5 flex-shrink-0">
                          <button
                            onClick={() => moveSectionUp(index)}
                            disabled={index === 0}
                            className={`p-1 border border-gray-400 ${index === 0 ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-white hover:bg-gray-100 cursor-pointer'}`}
                            style={{ 
                              boxShadow: index === 0 ? 'none' : '1px 1px 2px rgba(0,0,0,0.1)',
                              lineHeight: 0
                            }}
                          >
                            <ChevronUp className="w-3 h-3 text-gray-700" />
                          </button>
                          <button
                            onClick={() => moveSectionDown(index)}
                            disabled={index === memoStructure.length - 1}
                            className={`p-1 border border-gray-400 ${index === memoStructure.length - 1 ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-white hover:bg-gray-100 cursor-pointer'}`}
                            style={{ 
                              boxShadow: index === memoStructure.length - 1 ? 'none' : '1px 1px 2px rgba(0,0,0,0.1)',
                              lineHeight: 0
                            }}
                          >
                            <ChevronDown className="w-3 h-3 text-gray-700" />
                          </button>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-bold ${section.selected ? 'text-black' : 'text-gray-500'}`}>{section.title}</div>
                          <div className={`text-xs mt-0.5 ${section.selected ? 'text-gray-700' : 'text-gray-500'}`}>{section.description}</div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <input
                            type="checkbox"
                            checked={section.selected}
                            onChange={(e) => {
                              const newStructure = [...memoStructure]
                              newStructure[index].selected = e.target.checked
                              setMemoStructure(newStructure)
                            }}
                            className="w-4 h-4 cursor-pointer"
                          />
                          <button className="text-gray-600 hover:text-black px-1" style={{ cursor: 'pointer', fontSize: '18px' }}>⋮</button>
                    </div>
                  </div>
                ))}
              </div>
                </div>
                <button 
                  className="underline text-sm mt-1"
                  style={{ color: '#008030' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#006020'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#008030'}
                  style={{ cursor: 'pointer' }}
                >
                  + Add Section
                </button>
            </div>

              <div className="flex justify-center pt-3 border-t-2 border-gray-400">
                <button
                onClick={nextStep}
                  className="px-8 py-2 text-white border-2 font-bold"
                  style={{ 
                    backgroundColor: '#008030', 
                    borderColor: '#006020',
                    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)', 
                    cursor: 'pointer' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#008030'}
              >
                Generate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Select Options */}
        {currentStep === 2 && (
          <div className="space-y-3">
            {/* Policy Options Tabs */}
            <div className="bg-white border-2 border-gray-400" style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center border-b-2 border-gray-400" style={{ backgroundColor: '#e0f0e8' }}>
                <button 
                  className="p-2 border-r-2 border-gray-400" 
                  style={{ cursor: 'pointer', backgroundColor: '#c0e0d0' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a0d0b8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c0e0d0'}
                >
                  <ChevronLeft className="w-4 h-4" style={{ color: '#008030' }} />
                </button>
                <div className="flex-1 flex items-center justify-center gap-4 py-2 overflow-x-auto">
                  {policyOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedPolicyOption(option.id)}
                      className={`text-xs font-bold px-3 py-1 border-2 ${
                        selectedPolicyOption === option.id
                          ? 'bg-yellow-200 text-black border-yellow-500 border-t-yellow-300 border-l-yellow-300'
                          : 'bg-white text-black border-gray-400 hover:bg-yellow-100'
                      }`}
                      style={{ 
                        boxShadow: selectedPolicyOption === option.id ? 'inset 1px 1px 2px rgba(0,0,0,0.2)' : '1px 1px 2px rgba(0,0,0,0.1)',
                        cursor: 'pointer'
                      }}
                    >
                      {option.id}) {option.title}
                    </button>
                  ))}
                </div>
                <button 
                  className="p-2 border-l-2 border-gray-400" 
                  style={{ cursor: 'pointer', backgroundColor: '#c0e0d0' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a0d0b8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c0e0d0'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#008030' }} />
                </button>
              </div>
            </div>

            {/* Selected Policy Option Content */}
            <div className="bg-white border-2 border-gray-400 p-4" style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)' }}>
              <h2 className="text-xl font-bold mb-3 text-black border-b-2 border-gray-400 pb-2">
                {selectedPolicyOption}) {policyOptions[selectedPolicyOption - 1].title}
              </h2>
              <div className="bg-gray-50 border border-gray-300 p-3 mb-4" style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}>
                <p className="text-black leading-relaxed whitespace-pre-line text-sm">
                {policyOptions[selectedPolicyOption - 1].content}
              </p>
              </div>

              <div className="mb-4 border-2 border-gray-400 bg-white p-2" style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}>
                <p className="font-bold mb-2 text-black text-sm">References:</p>
                <div className="space-y-2">
                  {policyOptions[selectedPolicyOption - 1].references.map((ref, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {ref.type === 'pdf' ? (
                        <>
                          <FileText className="w-4 h-4 flex-shrink-0" style={{ color: '#d32f2f' }} />
                          <a 
                            href="#" 
                            className="text-sm hover:underline"
                            style={{ color: '#008030' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#006020'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#008030'}
                          >
                            {ref.name}
                          </a>
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: '#008030' }} />
                          <a 
                            href="#" 
                            className="text-sm hover:underline"
                            style={{ color: '#008030' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#006020'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#008030'}
                          >
                            {ref.name}
                          </a>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t-2 border-gray-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(selectedPolicyOption)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedOptions([...selectedOptions, selectedPolicyOption])
                      } else {
                        setSelectedOptions(selectedOptions.filter(id => id !== selectedPolicyOption))
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-bold text-black">☑ Select as Policy Option</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={recommendedOption === selectedPolicyOption}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRecommendedOption(selectedPolicyOption)
                      } else {
                        setRecommendedOption(null)
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-bold text-black">☑ Select as Recommended Option</span>
                </label>
              </div>
            </div>

            <div className="flex justify-center pt-3">
              <button
                onClick={nextStep}
                className="px-8 py-2 bg-green-600 text-white border-2 border-green-800 font-bold hover:bg-green-700"
                style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.3)', cursor: 'pointer' }}
              >
                Generate Draft
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Edit Draft */}
        {currentStep === 3 && (
          <div className="space-y-3">
            {Object.entries(draftSections).map(([key, section]) => (
              <div key={key} className="bg-white border-2 border-gray-400" style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)' }}>
                <div className="flex items-center justify-between p-3 border-b-2 border-gray-400" style={{ backgroundColor: '#e0f0e8' }}>
                  <div className="flex items-center gap-2">
                    <GripVertical className="w-4 h-4" style={{ color: '#008030' }} />
                    <span className="font-bold text-black">{section.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 text-white border-2 text-xs font-bold"
                      style={{ 
                        backgroundColor: '#008030', 
                        borderColor: '#006020',
                        boxShadow: '2px 2px 4px rgba(0,0,0,0.2)', 
                        cursor: 'pointer' 
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#008030'}
                    >
                      <Sparkles className="w-3 h-3 inline mr-1" />
                      AI Refine
                    </button>
                    <button
                      onClick={() => toggleSection(key)}
                      className="px-2 py-1 bg-gray-300 border-2 border-gray-500 text-xs font-bold hover:bg-gray-400"
                      style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.2)', cursor: 'pointer' }}
                    >
                      {expandedSections[key as keyof typeof expandedSections] ? '▲' : '▼'}
                    </button>
                  </div>
                </div>
                {expandedSections[key as keyof typeof expandedSections] && (
                  <div className="p-4 bg-gray-50 space-y-3">
                    <div>
                      <label className="block text-xs font-bold mb-1 text-black">Feedback for AI Adjustments</label>
                      <textarea
                        placeholder="e.g. make it more concise,..."
                        rows={2}
                        className="w-full px-2 py-1 border-2 border-gray-400 bg-white text-sm resize-none"
                        style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                      />
                    </div>
                    <textarea
                      value={section.content}
                      readOnly
                      rows={8}
                      className="w-full px-2 py-1 border-2 border-gray-400 bg-white resize-none"
                      style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-center pt-3">
              <button
                onClick={nextStep}
                className="px-8 py-2 bg-green-600 text-white border-2 border-green-800 font-bold hover:bg-green-700"
                style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.3)', cursor: 'pointer' }}
              >
                Finalize
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Finalize */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="border-2 p-2" style={{ backgroundColor: '#008030', borderColor: '#006020' }}>
              <h2 className="text-xl font-bold text-white">Final Version</h2>
              </div>
            <div className="p-4 bg-gray-50">
              <textarea
                value={finalVersion}
                readOnly
                rows={20}
                className="w-full px-2 py-1 border-2 border-gray-400 bg-white resize-none"
                style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div className="flex justify-center gap-3 pt-3">
              <button
                className="px-8 py-2 bg-gray-300 text-black border-2 border-gray-500 font-bold hover:bg-gray-400"
                style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.2)', cursor: 'pointer' }}
              >
                Save
              </button>
              <button
                className="px-8 py-2 bg-green-600 text-white border-2 border-green-800 font-bold hover:bg-green-700"
                style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.3)', cursor: 'pointer' }}
              >
                Export
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
