'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  // Load onboarding dismissal state from localStorage
  useEffect(() => {
    const dismissed = localStorage.getItem('onboarding-dismissed');
    if (dismissed === 'true') {
      setShowOnboarding(false);
    }
  }, []);

  const handleDismissOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('onboarding-dismissed', 'true');
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Bulletproof Your Soroban Smart Contracts
        </h1>
        <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
          An advanced fuzzing and mutation testing framework designed to discover elusive edge cases in Stellar&apos;s Soroban ecosystem.
        </p>
      </div>

      {/* Onboarding Cards */}
      {showOnboarding && (
        <div className="w-full max-w-5xl mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get Started with CrashLab</h2>
              <p className="text-zinc-600 dark:text-zinc-400">No campaigns yet. Follow these steps to start fuzzing your Soroban contracts.</p>
            </div>
            <button
              onClick={handleDismissOnboarding}
              className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition"
              aria-label="Dismiss onboarding"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Create Campaign */}
            <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Create Your First Campaign</h3>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Set up a fuzzing campaign to start testing your smart contracts for edge cases and vulnerabilities.
              </p>
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                Create Campaign
              </button>
            </div>

            {/* Card 2: Read Docs */}
            <div className="border border-purple-200 dark:border-purple-800 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Read the Documentation</h3>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Learn how to configure campaigns, write invariants, and interpret fuzzing results.
              </p>
              <a
                href="https://github.com/SorobanCrashLab/soroban-crashlab#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition text-center"
              >
                View Docs
              </a>
            </div>

            {/* Card 3: View Examples */}
            <div className="border border-green-200 dark:border-green-800 rounded-xl p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-green-600 dark:bg-green-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">View Examples</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Explore example contracts and campaigns to understand best practices and common patterns.
              </p>
              <a
                href="https://github.com/SorobanCrashLab/soroban-crashlab/tree/main/contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition text-center"
              >
                Browse Examples
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Card 1 */}
        <div className="border border-black/[.08] dark:border-white/[.145] rounded-xl p-8 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Intelligent Mutation</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Automatically mutate transaction envelopes and inputs to explore complex state transitions specific to Soroban.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-black/[.08] dark:border-white/[.145] rounded-xl p-8 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Invariant Testing</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Define robust invariants and property assertions. We run permutations to ensure they hold up under stress.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-black/[.08] dark:border-white/[.145] rounded-xl p-8 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Actionable Reports</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Get actionable, detailed execution traces when our fuzzer detects a crash, panic, or invariant breach.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center border-t border-black/[.08] dark:border-white/[.145] pt-12 w-full">
        <h2 className="text-2xl font-bold mb-4">Stellar Wave 3 is Open!</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          We are actively looking for contributors. Check out our open issues to build the future of Soroban dev tooling with us.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/SorobanCrashLab/soroban-crashlab/issues?q=is%3Aissue+is%3Aopen+label%3Awave3"
            className="flex items-center justify-center h-12 px-6 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Wave 3 Issues
          </a>
          <a
            href="https://github.com/SorobanCrashLab/soroban-crashlab"
            className="flex items-center justify-center h-12 px-6 rounded-full border border-black/[.15] dark:border-white/[.15] font-medium hover:bg-black/[.04] dark:hover:bg-white/[.04] transition dark:hover:text-black dark:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star the Repo
          </a>
        </div>
      </div>
    </div>
  );
}
