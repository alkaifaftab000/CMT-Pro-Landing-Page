import { useState, useEffect } from 'react';
import {
  FileText,
  Search,
  Calendar,
  Award,
  Globe,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Users,
  Sparkles,
  Shield,
  Zap,
  Star,
  Trophy,
  Mic,
  UserCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { ContactForm } from './components/ContactForm';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Paper Submission Portal',
      description: 'Structured submission with abstract, keywords, tracks, and file uploads'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Blind Peer Review',
      description: 'Automated double-blind review assignment with conflict detection'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Deadline Management',
      description: 'Configurable timelines for submission, revision, acceptance, registration'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Awards & Recognition',
      description: 'UILA awards, best paper, best presenter — fully automated'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Hybrid Conference Support',
      description: 'Online and in-person presenter management with discount logic'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Publications & Indexing',
      description: 'Direct pipeline to Springer LNNS, Scopus, WoS, EI Compendex'
    }
  ];

  const speakers = [
    {
      name: 'Prof. Tarun Kumar Chatterjee',
      title: 'Ford Motor Company, USA',
      image: 'https://www.iccdm-conf.com/images/keynote-speakers/tarun.jpg'
    },
    {
      name: 'Prof. Luís Miguel Cardoso',
      title: 'Polytechnic University of Portalegre, Portugal',
      image: 'https://www.iccdm-conf.com/images/keynote-speakers/luis.jpg'
    },
    {
      name: 'Prof. Dharnisha Narasappa',
      title: 'Versa Networks, USA',
      image: 'https://www.iccdm-conf.com/images/keynote-speakers/dhar.jpg'
    },
    {
      name: 'Prof. Aninda Bose',
      title: 'Executive Editor, Springer Nature, London',
      image: 'https://www.indea-conf.uk/images/keynote-speakers/aninda.jpg'
    },
    {
      name: 'Prof. Ruchika Malhotra',
      title: 'Delhi Technological University, India',
      image: 'https://www.indea-conf.uk/images/keynote-speakers/ruchika.jpg'
    },
    {
      name: 'Dr. Kathrin Kind',
      title: 'Chief Data Scientist, Cognizant (EMEA/APAC)',
      image: 'https://www.indea-conf.uk/images/keynote-speakers/kind.jpg'
    }
  ];

  const awards = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Best Paper Award',
      description: 'Awarded to top-ranked accepted papers'
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: 'Best Presenter Award',
      description: 'Voted by conference attendees'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Outstanding Reviewer Award',
      description: 'Recognizing top peer reviewers'
    }
  ];

  const steps = [
    { number: 1, title: 'Set Up Your Conference', description: 'Add dates, tracks, committee, submission guidelines' },
    { number: 2, title: 'Collect & Review Papers', description: 'Authors submit; reviewers assigned automatically via CMT Pro' },
    { number: 3, title: 'Publish & Celebrate', description: 'Accepted papers pipeline to indexing; awards distributed' }
  ];

  const submissionProcess = [
    'Register on CMT Pro & create author profile',
    'Submit paper (abstract + full paper + keywords + track selection)',
    'Automated desk check & plagiarism screen',
    'Double-blind peer review assignment',
    'Receive review feedback (accept / minor revision / major revision / reject)',
    'Submit revised manuscript',
    'Final acceptance notification',
    'Pay registration fee (online or hybrid)',
    'Camera-ready submission',
    'Paper published in Springer LNNS / Scopus proceedings'
  ];

  const guidelines = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Formatting',
      description: 'Springer LNCS template, max 12 pages, Times New Roman 10pt'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Ethics',
      description: 'No simultaneous submission, originality required, plagiarism policy enforced'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Review Policy',
      description: 'Double-blind, 2–3 reviewers per paper, conflict-of-interest checks'
    }
  ];

  const faqs = [
    { q: 'What is CMT Pro?', a: 'CMT Pro is a comprehensive conference management toolkit that handles paper submissions, peer review, author notifications, awards, and registrations for academic and industry conferences.' },
    { q: 'How do I submit my paper?', a: 'Register on the platform, create an author profile, and submit your paper with abstract, keywords, and track selection through our submission portal.' },
    { q: 'Is my paper double-blind reviewed?', a: 'Yes, all papers undergo double-blind peer review with automated conflict-of-interest detection and 2-3 reviewers per paper.' },
    { q: 'When will I receive my review result?', a: 'Review timelines vary by conference, but typically you will receive feedback within 2-3 weeks of submission.' },
    { q: 'Can I present online?', a: 'Yes! We support hybrid conferences with both online and in-person presentation options, with special discounts for online presenters.' },
    { q: 'What is the registration fee?', a: 'Registration fees vary by conference and presentation mode. Check your specific conference page for detailed pricing.' },
    { q: 'Will my paper be indexed in Scopus?', a: 'Yes, accepted papers are published in Springer LNNS proceedings and indexed in Scopus, WoS, and EI Compendex.' },
    { q: 'How are awards decided?', a: 'Awards are determined through a combination of peer review scores, presentation quality, and attendee voting, depending on the award category.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">CMT Pro</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#conferences" className="text-gray-600 hover:text-gray-900 transition-colors">Conferences</a>
              <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
              <a href="#awards" className="text-gray-600 hover:text-gray-900 transition-colors">Awards</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
                <a href="#conferences" className="text-gray-600 hover:text-gray-900">Conferences</a>
                <a href="#community" className="text-gray-600 hover:text-gray-900">Community</a>
                <a href="#awards" className="text-gray-600 hover:text-gray-900">Awards</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                <button className="w-full px-4 py-2 text-left text-gray-600">Login</button>
                <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Trusted by 50+ conferences worldwide
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The All-in-One Conference Management Toolkit
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Submit, review, manage, and publish — CMT Pro handles every stage of your academic or industry conference lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg shadow-indigo-600/30">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg">
                View Live Demo
              </button>
            </div>

            {/* Trust Logos */}
            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-6">Trusted by leading conferences worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 font-semibold">
                <span>ICICC</span>
                <span>ICCDM</span>
                <span>ICDAM</span>
                <span>INDEA</span>
                <span>ICAIN</span>
                <span>ICDPN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Conferences Managed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Paper Submissions Processed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-gray-600">Global Reviewers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">Springer, Scopus & WoS Indexed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Run a World-Class Conference
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple. Powerful. End-to-End.
            </h2>
            <p className="text-xl text-gray-600">
              Get your conference up and running in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-indigo-200" style={{ top: '4rem' }} />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CMT PRO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-24 h-24 text-indigo-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-900">Powerful Dashboard</p>
                  <p className="text-gray-600 mt-2">Manage everything in one place</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center text-4xl animate-bounce">
                ⚡
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose CMT Pro?
              </h2>

              <div className="space-y-6">
                {[
                  'Used by conferences at London Met, UPM Malaysia, University of Salford, and more',
                  'Springer & Scopus-ready publication workflows',
                  'Supports Hybrid Mode with automatic discount application',
                  'Real-time author notifications and revision tracking',
                  'Secure, fast, and accessible from any device'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACADEMIC PANEL */}
      <section id="conferences" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Leading Academics Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Keynote speakers and committee chairs across our conferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join a Global Research Community
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="text-6xl font-bold text-indigo-600 mb-4">6</div>
              <div className="text-2xl text-gray-900 mb-2">International Conferences</div>
              <div className="text-6xl font-bold text-indigo-600 mb-4 mt-8">3</div>
              <div className="text-2xl text-gray-900 mb-2">Countries</div>
              <div className="text-6xl font-bold text-indigo-600 mb-4 mt-8">12+</div>
              <div className="text-2xl text-gray-900">University Partners</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'London Metropolitan University',
                    'Universiti Putra Malaysia',
                    'University of Salford',
                    'WSG University',
                    'SGGW Poland',
                    'Polytechnic Univ. Portalegre'
                  ].map((partner, index) => (
                    <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Industry Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Intel oneAPI', 'Cognizant', 'Google', 'Springer Nature'].map((partner, index) => (
                    <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              UILA Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Celebrate excellence across every conference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  {award.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold">
              View Past Awardees <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SUBMISSION PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Submission Process — Step by Step
            </h2>
            <p className="text-xl text-gray-600">
              From submission to publication in 10 simple steps
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200" />

            <div className="space-y-8">
              {submissionProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 relative z-10 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 mt-2">
                    <p className="text-lg text-gray-700">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Author Guidelines
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know before submitting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                  {guideline.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guideline.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guideline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaqIndex === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 py-6 bg-slate-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">✨</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20">🚀</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-10">⭐</div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to manage your next conference?
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100 mb-10">
              Join 50+ conferences already running on CMT Pro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl">
                Get Started Free
              </button>
              <a href="#contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">CMT Pro</span>
              </div>
              <p className="text-sm mb-6">Powering academic conferences worldwide</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-xl">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-xl">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-xl">@</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#conferences" className="hover:text-white transition-colors">Conferences</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Submission Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Author Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Review Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-white mb-4">Legal & Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="mailto:editor.ijdpn@ui-journals.com" className="hover:text-white transition-colors font-semibold text-indigo-400">editor.ijdpn@ui-journals.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 CMT Pro by Universal Inovators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
