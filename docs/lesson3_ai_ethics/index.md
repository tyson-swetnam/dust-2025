# Lesson 3: Ethics and Artificial Intelligence

!!! info "Lesson Overview"
    **Duration:** 50 minutes

    **Structure:**

    - Introduction (5 min)
    - Core Concepts (25 min)
    - Discussion Activity (15 min)
    - Wrap-up (5 min)

## Learning Objectives

!!! success "After completing this lesson, you will be able to:"
    - Explain the difference between "Ethics of AI" and "Ethical AI"
    - Identify sources of bias in AI systems
    - Apply bias detection and mitigation strategies
    - Use AI tools responsibly and ethically in research
    - Recognize transparency and accountability issues
    - Evaluate AI systems using ethical frameworks
    - Make informed decisions about AI integration in your work

---

## Introduction (5 minutes)

### The AI Revolution

<figure markdown>
  ![Dartmouth AI Workshop 1956](https://spectrum.ieee.org/media-library/close-up-of-a-black-and-white-photo-of-seven-smiling-men-sitting-on-a-lawn.jpg?id=33603729&width=800){ width="600" }
  <figcaption>Dartmouth Summer Research Project on Artificial Intelligence, 1956. A new field of science had begun. (Credit: IEEE Spectrum, The Minsky Family)</figcaption>
</figure>

In 1956, a small group of scientists gathered at Dartmouth for a [Summer Research Project on Artificial Intelligence](https://spectrum.ieee.org/dartmouth-ai-workshop). They proposed:

> "Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."

Nearly 70 years later, we are witnessing the practical realization of their vision. AI systems now:

- Assist in scientific research and data analysis
- Support medical diagnosis and drug discovery
- Power search engines and recommendation systems
- Generate text, images, code, and music
- Make decisions affecting human lives

With this power comes profound responsibility.

### Two Critical Questions

!!! question "Framing Our Discussion"
    1. **Ethics of AI** - What principles and regulations should govern AI development and deployment?
    2. **Ethical AI** - How should AI systems behave to align with human values?

As researchers, we must consider both: the ethical frameworks surrounding AI and the ethical use of AI in our work.

---

## Core Concepts (25 minutes)

### Understanding AI Bias

!!! info "Key Definitions"
    **AI Bias** occurs when an AI system produces systematically prejudiced or unfair results, typically due to biased training data or flawed assumptions during development.

    **Algorithmic Discrimination** occurs when AI use results in unfair or illegal treatment of individuals or groups based on protected characteristics (age, disability, race, religion, sex, socioeconomic status).

    **Fairness** includes equalized error rates across groups and parity of outcomes, though defining fairness remains contextual and contested.

### Sources of AI Bias

AI systems inherit and often amplify human biases through multiple pathways:

#### 1. Data Bias

The most common source of AI bias stems from flawed, unrepresentative training data:

**Selection Bias**

- Training data not representative of entire population
- Example: AI trained only on data from one demographic group

**Measurement Bias**

- Data systematically differs from true values
- Example: Using zip code as proxy for income, introducing geographic bias

**Exclusion Bias**

- Certain groups omitted from data collection
- Example: Medical AI trained predominantly on male patients

**Labeling Bias**

- Subjective judgments during data annotation
- Example: Different labelers having different standards for "appropriate" content

**Historical Bias**

- Data reflects past discrimination
- Example: Hiring AI trained on historical data that reflects gender imbalances

#### 2. Algorithmic Bias

The algorithm itself may prioritize certain features inappropriately:

- Optimization techniques favoring majority over minority groups
- Feature selection that encodes protected characteristics
- Loss functions that do not account for fairness constraints
- Models optimizing for average performance, ignoring subgroup disparities

#### 3. Human Decision Bias

Human biases influence every stage of AI development:

**Confirmation Bias**

- Over-reliance on pre-existing beliefs when designing systems
- Seeking data that confirms hypotheses

**Stereotyping Bias**

- Perpetuating harmful generalizations
- Example: Associating certain occupations with specific genders

**Out-Group Homogeneity Bias**

- Treating underrepresented groups as more similar than they are
- Failing to capture within-group diversity

**Empathy Gap**

- Inability to incorporate nuanced human experiences
- Reducing complex realities to quantifiable metrics

#### 4. Synthetic Bias

When models trained on biased data generate synthetic datasets, they perpetuate and potentially amplify those biases into new systems.

!!! warning "The Amplification Problem"
    AI systems do not just reflect existing biases - they can amplify them. Small biases in training data can lead to large disparities in outcomes, especially when systems are deployed at scale or used in feedback loops.

### Real-World Examples of AI Bias

!!! example "Case Studies"

    **Healthcare: Skin Cancer Detection**

    AI models trained predominantly on light-skinned patients performed poorly when diagnosing melanoma in darker skin tones, potentially delaying critical treatment.

    **Criminal Justice: COMPAS**

    Recidivism prediction software showed racial bias, incorrectly flagging Black defendants as higher risk at nearly twice the rate of white defendants.

    **Hiring: Amazon Recruiting Tool**

    AI trained on historical hiring data learned to penalize resumes containing the word "women's" (as in "women's chess club"), reflecting and reinforcing gender imbalances.

    **Natural Language: Word Embeddings**

    Language models learned associations like "man is to computer programmer as woman is to homemaker," encoding gender stereotypes into AI systems.

    **Facial Recognition: Misidentification**

    Systems showed significantly higher error rates for women and people of color, leading to false identifications and wrongful arrests.

### Bias Prevention and Mitigation Strategies

#### Data-Centric Approaches

**Diverse and Representative Collection**

- Curate datasets that accurately represent all relevant groups
- Oversample underrepresented groups
- Document demographic composition clearly

**Quality Assurance**

- Identify gaps and compatibility problems
- Address historical underrepresentation
- Validate across different subpopulations

**Balancing Techniques**

- Under-sample majority groups
- Over-sample minority groups
- Generate synthetic data for underrepresented groups (carefully)

**Rigorous Labeling**

- Consistent annotation guidelines
- Multiple labelers to reduce individual bias
- Masked labeling (hiding sensitive attributes)
- Documentation of labeling decisions

**Continuous Updates**

- Data refreshed throughout AI lifecycle
- Monitor for dataset drift
- Update as populations and contexts change

#### Algorithmic Techniques

**Bias Detection Tools**

Modern tools help identify bias:

- [IBM AI Fairness 360](https://aif360.mybluemix.net/)
- [Google What-If Tool](https://pair-code.github.io/what-if-tool/)
- [Microsoft Fairlearn](https://fairlearn.org/)
- [Aequitas](http://aequitas.dssg.io/)

**Fairness Metrics**

Multiple mathematical definitions of fairness exist:

- **Demographic Parity** - Outcomes equal across groups
- **Equalized Odds** - Error rates equal across groups
- **Counterfactual Fairness** - Decisions unchanged if sensitive attribute changed
- **Individual Fairness** - Similar individuals treated similarly

!!! warning "No Perfect Fairness"
    Different fairness metrics can conflict with each other. Optimizing for one may worsen another. Context determines which metric(s) matter most.

**Algorithmic Adjustments**

- **Pre-processing** - Adjust training data (reweighting, resampling)
- **In-processing** - Modify algorithm (fairness constraints, adversarial debiasing)
- **Post-processing** - Adjust outputs (threshold optimization)

**Explainable AI (XAI)**

Understanding model decisions helps identify bias:

- SHAP (SHapley Additive exPlanations)
- LIME (Local Interpretable Model-agnostic Explanations)
- Attention visualization for neural networks
- Feature importance analysis

### Using AI Ethically in Research

As researchers employing AI tools, we have ethical obligations:

#### 1. Verification and Validation

!!! danger "Critical Rule"
    **Never use AI for tasks where you cannot verify accuracy.**

    If you lack expertise to judge whether AI output is correct, you cannot use it responsibly.

**Best Practices:**

- Verify AI-generated information against primary sources
- Use AI as assistant, not replacement for expertise
- Fact-check all claims, especially for high-stakes decisions
- Maintain critical thinking - do not accept outputs uncritically

#### 2. Transparency and Attribution

**Disclose AI Use**

- In methods sections, describe AI tools used
- Specify models, versions, prompts when relevant
- Explain what AI did and what humans verified

**Cite Appropriately**

- Follow journal guidelines for AI tool citation
- Distinguish between AI-assisted and AI-generated content
- Do not claim AI output as your original work

#### 3. Privacy and Confidentiality

!!! warning "Data Privacy with AI"
    Do not input confidential, sensitive, or regulated data into AI systems unless:

    - You have explicit permission
    - The system complies with relevant regulations (HIPAA, FERPA, etc.)
    - Data are properly anonymized
    - You understand data retention policies

**Sensitive Data Includes:**

- Human subjects data
- Proprietary information
- Personally identifiable information (PII)
- Protected health information (PHI)
- Student records
- Unpublished research data from collaborators

#### 4. Bias Awareness

When using AI in research:

- Understand potential biases in AI tools you use
- Consider whether AI recommendations might disadvantage certain groups
- Validate AI performance across relevant subpopulations
- Report limitations and potential biases in publications

#### 5. Environmental Considerations

Large AI models have significant environmental costs:

- Training GPT-3 emitted ~550 tons of CO2
- Each ChatGPT query uses substantial energy
- Consider environmental impact when choosing tools
- Use smaller models when appropriate

### Transparency and Accountability

#### Model Documentation

Responsible AI development requires thorough documentation:

**Model Cards** (Mitchell et al., 2019)

- Intended use and users
- Training data characteristics
- Performance metrics across subgroups
- Ethical considerations
- Example: [Google Model Cards](https://modelcards.withgoogle.com/)

**Datasheets for Datasets** (Gebru et al., 2018)

- Motivation for dataset creation
- Composition and collection process
- Preprocessing and labeling
- Uses, distribution, and maintenance

#### Regulatory Landscape

AI governance is evolving rapidly:

**International Frameworks**

- [UNESCO Recommendation on the Ethics of AI](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics)
- [OECD AI Principles](https://oecd.ai/en/ai-principles)
- [EU AI Act](https://artificialintelligenceact.eu/)

**National Policies**

- US Executive Orders on AI (evolving with administrations)
- UK AI Strategy and Regulatory Approach
- China's AI Governance Framework

**Institutional Guidelines**

Many universities and research institutions now have:

- AI use policies for researchers
- Guidelines for student use of AI
- Review boards for high-risk AI applications
- Training requirements for AI users

### Ethical Frameworks for AI

Several frameworks guide ethical AI development:

#### Asilomar AI Principles (2017)

23 principles covering:

- Research issues (research culture, funding, science-policy link)
- Ethics and values (safety, failure transparency, value alignment)
- Longer-term issues (capability caution, importance of humans, AI arms race)

#### IEEE Ethically Aligned Design

Principles:

1. Human Rights
2. Well-being
3. Data Agency
4. Effectiveness
5. Transparency
6. Accountability
7. Awareness of Misuse
8. Competence

#### ACM Code of Ethics

Relevant principles:

- Contribute to society and human well-being
- Avoid harm
- Be honest and trustworthy
- Be fair and take action not to discriminate
- Respect privacy
- Honor confidentiality

---

## Discussion Activity (15 minutes)

### Scenario-Based Ethical Analysis

Work in small groups to analyze these scenarios:

#### Scenario 1: Research Assistant AI

!!! example "The Situation"
    You are writing a grant proposal in a field adjacent to your expertise. You use ChatGPT to:

    - Generate a literature review
    - Suggest methodological approaches
    - Write sections on statistical analysis

    You plan to submit without verifying citations or methods in depth.

**Discussion Questions:**

1. What ethical issues does this raise?
2. What could go wrong?
3. How should AI be used ethically in this context?
4. What disclosure is appropriate?

#### Scenario 2: Biased Training Data

!!! example "The Situation"
    You are developing an AI model to predict student success in STEM programs. Your training data comes from a university with historical underrepresentation of women and minorities in STEM. The model performs well on aggregate but shows systematic bias.

**Discussion Questions:**

1. What types of bias might be present?
2. What are the potential harms if this system is deployed?
3. What data-centric approaches could help?
4. What algorithmic interventions might work?
5. Should the system be deployed? Under what conditions?

#### Scenario 3: AI-Assisted Discovery

!!! example "The Situation"
    You use AI to analyze thousands of papers and identify a novel research direction. The AI connects ideas across disciplines in ways humans had not. You design and execute experiments based on AI suggestions, leading to publishable results.

**Discussion Questions:**

1. How should you attribute the AI's contribution?
2. What should you disclose in the methods section?
3. If AI identified the hypothesis, who "owns" the intellectual contribution?
4. How does this differ from using a search engine or database?

#### Scenario 4: Dual-Use Research

!!! example "The Situation"
    Your AI model predicts molecular structures with therapeutic potential. However, the same model could theoretically be used to design harmful compounds. You plan to publish the model open-source.

**Discussion Questions:**

1. What are your ethical obligations?
2. Should you restrict access to the model?
3. How do you balance openness with safety?
4. What documentation or warnings should accompany release?

### Group Reporting

Each group shares:

- Key ethical issues identified
- Proposed solutions or guidelines
- Remaining uncertainties or disagreements
- Broader principles that emerged

---

## Wrap-up (5 minutes)

### Key Takeaways

!!! success "Remember These Concepts"
    1. **Bias is pervasive** - AI systems inherit human biases from data, algorithms, and decisions
    2. **Multiple approaches needed** - Address bias at data, algorithm, and deployment stages
    3. **Verification is essential** - Never use AI where you cannot validate outputs
    4. **Transparency matters** - Disclose AI use, document systems, understand limitations
    5. **Context is everything** - Ethical AI use depends on application, stakes, and alternatives
    6. **Ongoing learning** - AI ethics is an evolving field requiring continuous education

### Ethical AI Checklist

Use this checklist when integrating AI into research:

!!! question "Before Using AI"
    - [ ] Do I have expertise to verify AI outputs?
    - [ ] Am I using appropriate tools for this task?
    - [ ] Do I understand potential biases in this AI system?
    - [ ] Have I checked institutional policies on AI use?
    - [ ] Is my use consistent with AI's intended purpose?

!!! question "When Using AI"
    - [ ] Am I critically evaluating all outputs?
    - [ ] Have I verified facts and citations?
    - [ ] Am I protecting confidential/sensitive data?
    - [ ] Am I documenting what AI does vs. what I do?
    - [ ] Would I be comfortable explaining this use publicly?

!!! question "After Using AI"
    - [ ] Have I disclosed AI use appropriately?
    - [ ] Have I cited AI tools correctly?
    - [ ] Have I evaluated AI impact on outcomes?
    - [ ] Have I considered potential biases introduced?
    - [ ] Have I documented limitations?

### Self-Assessment Quiz

??? question "What is the difference between 'Ethics of AI' and 'Ethical AI'?"
    **Ethics of AI** refers to principles and regulations governing AI development and deployment - the frameworks, laws, and guidelines surrounding AI.

    **Ethical AI** focuses on how AI systems behave and whether that behavior aligns with human values - the conduct and impacts of AI systems themselves.

    Both are important: we need good governance (Ethics of AI) and well-designed systems (Ethical AI).

??? question "True or False: Selection bias occurs when the algorithm prioritizes certain features over others"
    **False**

    Selection bias is a type of **data bias** that occurs when training data are not representative of the whole population. For example, training a medical AI predominantly on data from one demographic group.

    Algorithmic bias refers to issues with how the algorithm itself processes information, such as optimization techniques that favor majority groups.

??? question "Which is an example of 'Explainable AI (XAI)' in bias mitigation?"
    **Understanding which inputs drive model decisions, revealing hidden biases**

    XAI techniques like SHAP, LIME, and attention visualization help make AI decision-making transparent. This transparency is crucial for identifying biases - for example, discovering that a hiring AI inappropriately weighs gender or that a medical AI relies on spurious correlations rather than causal factors.

??? question "True or False: It is acceptable to use AI to write a research proposal in a field where you have no expertise"
    **False**

    Using AI where you cannot verify accuracy is unethical. If you lack expertise to judge whether AI-generated information is correct, truthful, or appropriate, you cannot use it responsibly in research contexts.

    AI should assist, not replace, domain expertise. Always use AI only in areas where you can critically evaluate its outputs.

### Looking Forward

Ethics in AI and research is not a one-time lesson but an ongoing practice:

**Continue Learning:**

- Follow AI ethics research and discussions
- Engage with institutional review boards
- Participate in ethics training offered by your institution
- Stay current on regulatory developments

**Take Action:**

- Implement ethical practices in your work
- Advocate for responsible AI in your field
- Share knowledge with colleagues
- Contribute to ethical guidelines in your discipline

**Critical Engagement:**

- Question AI systems and their design
- Consider who benefits and who might be harmed
- Think about long-term societal implications
- Balance innovation with responsibility

### Completing the Training

Congratulations on completing all three lessons! You now have foundational knowledge in:

- Open science principles and practices
- Research data management and FAIR principles
- Ethical considerations in AI

**Next Steps:**

1. Review [Additional Resources](../resources.md) for deeper learning
2. Apply concepts to your current research projects
3. Share knowledge with your research group
4. Revisit lessons as you encounter new situations
5. Provide [feedback](https://github.com/tswetnam/dust-2025/issues) to improve this training

### Additional Resources

**Frameworks and Guidelines:**

- [UNESCO Recommendation on Ethics of AI](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics)
- [Asilomar AI Principles](https://futureoflife.org/open-letter/ai-principles/)
- [Montreal Declaration for Responsible AI](https://www.montrealdeclaration-responsibleai.com/)

**Tools and Platforms:**

- [IBM AI Fairness 360](https://aif360.mybluemix.net/)
- [Microsoft Fairlearn](https://fairlearn.org/)
- [Google PAIR](https://pair.withgoogle.com/)

**Further Reading:**

- [Weapons of Math Destruction](https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction) by Cathy O'Neil
- [Artificial Unintelligence](https://mitpress.mit.edu/9780262537018/artificial-unintelligence/) by Meredith Broussard
- [Atlas of AI](https://anatomyof.ai/) by Kate Crawford

**Courses:**

- [Elements of AI](https://www.elementsofai.com/)
- [Ethics of AI (edX)](https://www.edx.org/learn/ethics/helsingin-yliopisto-ethics-of-ai)
- [Fairness in Machine Learning](https://fairmlclass.github.io/)

---

**Previous:** [← Lesson 2: Data Management](../lesson2_data_management/index.md) | **Home:** [Training Home →](../index.md)

---

**Last updated:** {{ git_revision_date_localized }}
