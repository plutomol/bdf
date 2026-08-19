import { useState } from 'react'
import './finddonor.css'
import Ok from './../ok/Ok'

function FindDonor() {
	const [bloodGroup, setBloodGroup] = useState('')
	const [address, setAddress] = useState('')
	const [results, setResults] = useState([])
	const [loading, setLoading] = useState(false)
	const [requestSent, setRequestSent] = useState(false)

	const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

	const handleSearch = async () => {
		setLoading(true)
		try {
			const res = await fetch('http://localhost/finddonor.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ bloodGroup, address }),
			})
			if (!res.ok) throw new Error('Network response was not ok')
			const data = await res.json()
			setResults(Array.isArray(data) ? data : [])
		} catch (err) {
			console.error('Find donor error', err)
			setResults([])
		} finally {
			setLoading(false)
		}
	}

	const handleRequest = (donor) => {
		const name = donor.name || 'donor'
		alert(`Request sent to ${name}`)
		setRequestSent(true)
	}

	return (
		<div className="finddonor-container">
			<h2>Find Donor</h2>
			{requestSent && <Ok />}

			<div className="filters">
				<select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
					<option value="">All blood groups</option>
					{bloodGroups.map((bg) => (
						<option key={bg} value={bg}>
							{bg}
						</option>
					))}
				</select>

				<input
					type="text"
					placeholder="Address (city or area)"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>

				<button onClick={handleSearch} disabled={loading}>
					{loading ? 'Searching...' : 'Search'}
				</button>
			</div>

			<div className="results">
				{results.length === 0 ? (
					<div className="no-results">No donors found</div>
				) : (
					results.map((d, idx) => {
						const name = d.name || d.donor_name || d.fullname || d.full_name || ''
						const bg = d.blood_group || d.bloodgroup || d.bloodGroup || ''
						const addr = d.address || d.location || d.city || ''
						const contact = d.contactno || d.phone || d.contact || d.mobile || ''
						return (
							<div className="result-row" key={idx}>
								<div className="cell name">{name}</div>
								<div className="cell bg">{bg}</div>
								<div className="cell addr">{addr}</div>
								<div className="cell contact">{contact}</div>
								<div className="cell action">
									<button className="small-btn" onClick={() => handleRequest({ name, contact })}>Request</button>
								</div>
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}
export default FindDonor