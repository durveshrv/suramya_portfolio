import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import iiser from "../assets/company/iiser.jpg"
import gokhale from "../assets/company/gokhale.jpeg"
import l3 from "../assets/company/l3.png"
import omdena from "../assets/company/omdena.png"
import pict from "../assets/company/pict.jpeg"
import traffic from "../assets/traffic.jpeg"
import query from "../assets/query.png"
import chef_buddy from "../assets/chef_buddy.jpeg"
import csi from "../assets/csi.jpeg"
import ieee from "../assets/ieee.jpeg"
import nss from "../assets/nss.jpeg"
import Leukemia_3 from "../assets/Leukemia_3.jpg"
import rev from "../assets/Revoltioning Emotion.png"
import lev from "../assets/Leveraging_RAG.png"
import wisdom from "../assets/Wisdom_Of_Weigting.png"
import unrev from "../assets/review.png"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "publication",
    title: "Publications",
  },
  {
    id: "extracurricular",
    title: "Leadership",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Deep Learning",
    icon: backend,
  },
  {
    title: "Large Language Models",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "NLP Research Intern",
    company_name: "L3 CUBE",
    icon:l3,
    iconBg: "#383E56",
    date: "July 2024 — Present",
    points: [
      "Assessed models such as GPT-4o and Gemini 1.0 Pro, Gemma 2 (2B and 9B), and Llama 3.1 (8B) on Marathi language NLP tasks",
      "Evaluated BERT-based and FastText models on 6 Marathi datasets for sentiment, news, and hate speech analysis.",
      "Developing a Multitask Learning model for performing multiple tasks like classification, NER and Summarization.",
      "Curating 12K gold standard Paraphrasing Dataset for Marathi NLP.",
    ],
  },
  {
    title: "Research Intern",
    company_name:
      "Indian Institute of Science Education and Research (IISER Bhopal)",
    icon:iiser,
    iconBg: "#E6DEDD",
    date: "June 24 - Present",
    points: [
      "Leveraging 6 LLMs and 8 prompting techniques to identify existing drugs for rare diseases.",
      "Deployed NER and Feature Extraction on medical text to construct dynamic knowledge graphs using Neo4j.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "CAILMD Lab, PICT",
    icon:pict,
    iconBg: "#383E56",
    date: "Sept 23 — Apr 24",
    points: [
      "Applied RAG approach and employed 4-bit quantization on Palmyera 20B LLM to detect errors in clinical notes.",
      "Proposed a stacking classifier model, fine-tuned using Optuna for sexism detection in Spanish text with 84% recall.",
      "Finetuned XML-RoBERTa, DistilRoBERTa, T5 to detect sentiments in code-mixed Hinglish conversations",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Gokhale Institute of Politics and Economics",
    icon:gokhale,
    iconBg: "#E6DEDD",
    date: "Jan 24 - Mar 24",
    points: [
      "Designed a multilingual chatbot to assist non-English-speaking students, increasing admissions by 18%.",
    ],
  },
  {
    title: "Junior ML Engineer",
    company_name: "Omdena",
    icon:omdena,
    iconBg: "#E6DEDD",
    date: "Oct 23 - Dec 23",
    points: [
      "Developed a tech-driven approach to elevate ESG monitoring and enhance Fraud Prevention.",
      "Implemented Green Washing Detection Model using LLMs and LSTMs to detect misleading claims.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CHEF BUDDY",
    description: [
      "Developed a personalized Food Recipe Recommendation System that suggests the best recipes and steps based on ingredients available from a dataset of 7500+ food recipes.",
      "Suggests the Top 10 Recipes closely related to the user’s favorite food.",
      "Developed CNN architecture for Image Classification that can classify images of 60+ food items, achieving 96% accuracy and robust performance.",
      "Crafted an AI-driven Chatbot using Neural Networks to suggest optimal beverage pairings for various cuisines,enriching the dining experience.",
      "Classified Food Reviews for Restaurants to enhance customer experience and improve service.",
    ],
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
    ],
    image: chef_buddy,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dynamic Traffic Light Control",
    description: [
      "Engineered an advanced traffic control system utilizing Deep Reinforcement Learning (DRL) and Developed a multi-objective optimization algorithm  to dynamically adjust traffic light timings based on real-time vehicle density and flow analysis from CCTV footage.",
      "Reduced the average vehicle waiting time by 54% and decreased fuel emissions by 27% compared to existing static traffic light systems.",
    ],
    tags: [
      {
        name: "DRL",
        color: "blue-text-gradient",
      },
    ],
    image: traffic,
    source_code_link: "https://github.com/",
  },
  {
    name: "Query Optimization for Graph Databases",
    description: [
      "Developed an AI-driven query optimization framework to enhance the efficiency of knowledge graph-based information extraction, achieving a 40% reduction in query processing time.",
      "Implemented a hybrid approach combining statistical analysis and spatial indexing through KD-Trees, enabling more efficient data retrieval by optimizing query paths and reducing computational overhead",
    ],
    tags: [
      {
        name: "KD-Trees",
        color: "blue-text-gradient",
      },
    ],
    image: query,
    source_code_link: "https://github.com/",
  },
];
const researches = [
  {
    name: "Maven at MEDIQA-CORR 2024: Leveraging RAG and Medical LLM for Error Detection and Correction in Medical Notes (Published at NAACL 2024)",
    description:[
      "Addressing the critical challenge of identifying and rectifying medical errors in clinical notes, we present a novel approach tailored for the MEDIQA-CORR task @ NAACL-ClinicalNLP 2024, which comprises three subtasks: binary classification, span identification, and natural language generation for error detection and correction. Binary classification involves detecting whether the text contains a medical error; span identification entails identifying the text span associated with any detected error; and natural language generation focuses on providing a free text correction if a medical error exists. Our proposed architecture leverages Named Entity Recognition (NER) for identifying disease-related terms, Retrieval-Augmented Generation (RAG) for contextual understanding from external datasets, and a quantized and fine-tuned Palmyra model for error correction. Our model achieved a global rank of 5 with an aggregate score of 0.73298, calculated as the mean of ROUGE-1-F, BERTScore, and BLEURT scores.",
    ],
    image: lev,
    source_code_link: "https://aclanthology.org/2024.clinicalnlp-1.36/",
  },
  {
    name: "Leukemia Diagnosis using Transfer Learning: An Efficient Approach (Published at Frontiers in Health Informatics - Scopus Indexed Journal)",
    description:[
      "Leukemia, the most prevalent type of blood cancer, affects both adults and children. For effective intervention, this necessitates prompt detection. Nevertheless, the conventional manual diagnostic techniques have lengthy procedures and are subject to variances based on skill. We use transfer learning techniques in our work, which take advantage of knowledge from models trained on massively parallel datasets. This method greatly improves time and cost efficiency by lowering the quantity of labeled data and processing resources required for the particular task of identifying acute lymphoblastic leukemia (ALL). This paper presents an automated leukemia diagnostic approach that makes use of machine learning methods, such as transfer learning and deep learning-based convolutional neural networks (CNNs). We present a approach that integrates CNN layers within Transfer Learning Architectures. The model that used EfficientNetB3 performed the best out of all the CNN architectures that were previously tested on the C-NMC-2019 ALL Dataset. It had 100% training accuracy, 96.87% testing accuracy, 96.9% F1-Score, 96.24% recall, and 97.58% precision. This model is considered one of the most promising models. The solution under proposal tackles the critical requirement of diagnosing leukemia early. By effectively examining microscopic images, identifying crucial information, and using filtering algorithms to improve accuracy, it overcomes the shortcomings of manual methods. By giving physicians and other healthcare professionals an accurate tool, this automated technique promises to increase blood cancer identification and greatly improve patient care and management of ALL.",
    ],
    image: Leukemia_3,
    source_code_link:
      "https://healthinformaticsjournal.com/index.php/IJMI/article/view/38",
  },
  {
    name: "Innovators at SemEval-2024 Task 10: Revolutionizing Emotion Recognition and Flip Analysis in Code-Mixed Texts (Published at ACL 2024)",
    description:[
      "In this paper, we introduce our system for all three tracks of the SemEval 2024 EDiReF Shared Task 10, which focuses on Emotion Recognition in Conversation (ERC) and Emotion Flip Reasoning (EFR) within the domain of conversational analysis. Task-Track 1 (ERC) aims to assign an emotion to each utterance in the Hinglish language from a predefined set of possible emotions. Tracks 2 (EFR) and 3 (EFR) aim to identify the trigger utterance(s) for an emotion flip in a multi-party conversation dialogue in Hinglish and English text, respectively. For Track 1, our study spans both traditional machine learning ensemble techniques, including Decision Trees, SVM, Logistic Regression, and Multinomial NB models, as well as advanced transformer-based models like XLM-Roberta (XLMR), DistilRoberta, and T5 from Hugging Face’s transformer library. In the EFR competition, we developed and proposed two innovative algorithms to tackle the challenges presented in Tracks 2 and 3. Specifically, our team, Innovators, developed a standout algorithm that propelled us to secure the 2nd rank in Track 2, achieving an impressive F1 score of 0.79, and the 7th rank in Track 3, with an F1 score of 0.68.",
    ],
    image: rev,
    source_code_link: "https://aclanthology.org/2024.semeval-1.93/",
  },
  {
    name: "The Wisdom of Weighing: Stacking Ensembles for a More Balanced Sexism Detector (Published at CLEF Proceedings 2024)",
    description:[
      "The rise of sexism online has become increasingly prevalent as more and more people are found on social media with little regard for what they say behind a screen of anonymity. Sexism in the form of derogatory, biased, violent, and presumptuous remarks, apart from perpetuating gender inequality, also creates a hostile environment for women that calls for immediate attention. EXIST 2024, the fourth edition of the sEXism Identification in Social Networks task at CLEF 2024, aims to not only detect sexism but also capture its types, from explicit misogyny to other subtle expressions that involve implicit sexist behaviors. We provided solutions for three tasks, the first of which was the identification of sexism in both English and Spanish texts, whereas the second and third identified the more subtle categories and aspects of sexism. In this study, we introduce a robust classification system utilizing a stacking classifier composed of four LLMs, whose output probabilities feed into a LightGBM model to produce a consolidated prediction. Additionally, five supplementary models contribute to the final decision by providing weighted predictions based on their respective accuracies. This ensemble approach, leveraging both stacking and weighted averaging, ensures enhanced accuracy and reliability in classifying text as sexist or non-sexist.",
    ],
    image: wisdom,
    source_code_link: "https://ceur-ws.org/Vol-3740/paper-113.pdf",
  },
  {
    name: "Leveraging Large Language Models for Biomedical Knowledge Graph Construction and Querying (Submitted at IACC-2024)",
    description:[
      "This paper introduces a novel methodology for constructing a comprehensive biomedical knowledge graph by applying advanced Natural Language Processing (NLP) techniques. By leveraging Large Language Models (LLMs) and a multifaceted prompt engineering approach, we effectively perform Named Entity Recognition (NER) and Relation Extraction(RE) on biomedical literature, targeting entities such as diseases, drugs, proteins, procedures, and symptoms. Our methodology incorporates eight distinct prompt engineering strategies for NER and a standardized approach for RE, facilitating the extraction of intricate inter-entity relationships. The resulting knowledge graph amalgamates diverse data sources into a unified frame-work, enabling efficient querying, visualization, and analysis of biomedical information. Furthermore, we present an innovative query processing pipeline that integrates GPT-3.5 turbo with the knowledge graph, allowing users to interact with the graph through natural language. This integrated system empowers the discovery of novel correlations, accelerating scientific research and fostering interdisciplinary collaboration. This represents a substantial contribution to the field of biomedical knowledge graph construction, offering a robust platform for accelerating scientific discovery and informing clinical decision-making.",
    ],
    image: unrev,
    source_code_link: "#",
  },
  {
    name: "On Limitations of LLM as Annotator for Low Resource Languages (Submitted at ICON-2024)",
    description:[ "Low-resource languages face significant challenges due to the lack of sufficient linguistic data, resources, and tools for tasks such as supervised learning, annotation, and classification. This shortage hinders the development of accurate models and datasets, making it difficult to perform critical NLP tasks like sentiment analysis or hate speech detection. To bridge this gap, Large Language Models (LLMs) present an opportunity for potential annotators, capable of generating datasets and resources for these underrepresented languages. In this paper, we focus on Marathi, a low-resource language, and evaluate the performance of both closed-source and open-source LLMs as annotators. We assess models such as GPT-4o and Gemini 1.0 Pro, Gemma 2 (2B and 9B), and Llama 3.1 (8B) on classification tasks including sentiment analysis, news classification, and hate speech detection. Our findings reveal that while LLMs excel in annotation tasks for high-resource languages like English, they still fall short when applied to Marathi. Even advanced closed models like Gemini and GPT underperform in comparison to BERT-based baselines, highlighting the limitations of LLMs as annotators for low-resource languages.",],
    image: unrev,
    source_code_link: "#",
  },
  {
    name: "BERT or FastText? A Comparative Analysis of Contextual as well as Non-Contextual Embeddings (Submitted at CHIPSAL@Coling 2025)",
    description: ["Natural Language Processing (NLP) for low-resource languages presents significant challenges, particularly due to the scarcity of high-quality annotated data and linguistic resources.The choice of embeddings plays a critical role in enhancing the performance of NLP tasks, such as news classification, sentiment analysis, and hate speech detection, especially for low-resource languages like Marathi. In this study, we investigate the impact of various embedding techniques—Contextual BERT-based, Non-Contextual BERT-based, and FastText-based on NLP classification tasks specific to the Marathi language. Our research includes a thorough evaluation of both compressed and uncompressed embeddings, providing a comprehensive overview of how these embeddings perform across different scenarios. Specifically, we compare two BERT model embeddings, Muril and MahaBERT, as well as two Fast-Text model embeddings, IndicFT and MahaFT. Our evaluation includes applying embeddings to a Multiple Logistic Regression (MLR) classifier for task performance assessment, as well as TSNE visualizations to observe the spatial distribution of these embeddings. The results demonstrate that contextual embeddings out-perform non-contextual embeddings, as well as BERT-based embeddings, provide better results than FastText-based embeddings",],

    image: unrev,
    source_code_link: "#",
  },
  {
    name: "A Comprehensive Overview on Multitask Learning for Low Resource Languages (Submitted at ACL 2025)",
    description: ["Multi-task learning (MTL) has garnered sub-stantial attention in the field of Natural Language Processing (NLP) for its ability to improve performance by jointly learning multiple tasks. By leveraging the interrelatedness of tasks, MTL can mitigate issues like overfitting and data scarcity, which are particularly relevant in low-resource languages such as Marathi. This survey reviews recent advances in MTL, focusing on its application to NLP tasks in low- resource languages. We examine various MTL training paradigms, including joint training and task-specific optimization, and explore diverse model architectures such as parallel, hierarchical, and modular frameworks. Additionally, we analyze how MTL approaches have been adapted for low-resource languages by integrating domain-specific features and addressing linguistic challenges. Finally, we discuss the potential of MTL in advancing NLP for low-resource languages, identifying challenges such as dataset limitations, task balancing, and cross-lingual transfer, while outlining future research directions aimed at further enhancing language understanding and task-specific outcomes in this area.",],
    image: unrev,
    source_code_link: "#",
  },
];
const clubs = [
  {
    name: "PICT Computer Student Branch (PCSB)",
    description:["Data Science Head (April 2024 — Present): Organized workshops for 500+ students on Machine Learning, Deep Learning, Python, and data visualization tools like Tableau.","Event Head (Sept 2023 — March 2024): Spearheaded CricWars, a college’s premier Cricket Event, leading a team of 10+ to organize rounds, teams, and logistics, ensuring 200+ participants had a seamless experience.",],
    image: csi,
  },
  {
    name: "PICT IEEE Student Branch (PISB)",
    description: "Event Director (Nov 2022 — April 2023): Led a team of 7 in developing thought-provoking Advanced Logical Reasoning questions for the Enigma Event of Crendenz’23, increasing participant engagement by 45% compared to the previous year’s event.",
    image:ieee,
  },
  {
    name: "PICT National Service Scheme (NSS)",
    description: "Event Management Lead (July 2023 — Present): Organized impactful community initiatives, including a Blood Donation Drive collecting 250+ blood bags, Diwali celebrations with Orphanage children, and blanket donations to 7 olg-age homes during winter",
    image:nss,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  researches,
  clubs,
};
