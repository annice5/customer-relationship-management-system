import React from 'react'
import { FiUserCheck, FiZap, FiHeart, FiClock } from 'react-icons/fi';

const leads = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    source: 'LinkedIn',
    engagement: 85,
    responseTime: '2h',
    emotion: 'Positive',
    score: 92,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    source: 'Website',
    engagement: 45,
    responseTime: '12h',
    emotion: 'Neutral',
    score: 61,
  },
  {
    id: 3,
    name: 'Samuel Green',
    email: 'sam@example.com',
    source: 'WhatsApp',
    engagement: 25,
    responseTime: '24h+',
    emotion: 'Negative',
    score: 39,
  },
];

const getScoreColor = (score) => {
  if (score >= 80) return 'bg-green-100 text-green-700';
  if (score >= 50) return 'bg-yellow-100 text-yellow-700';
  return 'bg-red-100 text-red-700';
};


const LeadScoring = () => {
  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">🎯 Lead Scoring</h1>

      <div className="bg-white rounded-xl shadow-md overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-purple-100 text-purple-800 text-left">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Source</th>
              <th className="p-4">Engagement</th>
              <th className="p-4">Response Time</th>
              <th className="p-4">Emotion</th>
              <th className="p-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium flex items-center gap-2">
                  <FiUserCheck className="text-purple-600" /> {lead.name || 'N/A'}
                </td>
                <td className="p-4">{lead.email || 'N/A'}</td>
                <td className="p-4">{lead.source || 'N/A'}</td>
                <td className="p-4 flex items-center gap-2 text-indigo-700">
                  <FiZap /> {lead.engagement ?? 'N/A'}%
                </td>
                <td className="p-4 flex items-center gap-2 text-gray-600">
                  <FiClock /> {lead.responseTime || 'N/A'}
                </td>
                <td className="p-4 flex items-center gap-2">
                  {lead.emotion ? (
                    <>
                      <FiHeart
                        className={
                          lead.emotion === 'Positive'
                            ? 'text-green-600'
                            : lead.emotion === 'Neutral'
                            ? 'text-yellow-500'
                            : 'text-red-600'
                        }
                      />
                      {lead.emotion}
                    </>
                  ) : (
                    'N/A'
                  )}
                </td>
                <td className="p-4">
                  {lead.score !== undefined ? (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getScoreColor(lead.score)}`}>
                      {lead.score}
                    </span>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeadScoring