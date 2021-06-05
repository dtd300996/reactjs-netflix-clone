import Accordion from 'components/accordion';
import React from 'react';
import faqsData from 'fixtures/faqs.json';
import OptForm from 'components/opt-form';

function FaqsContainer() {
	const defaultIndexesOpen = [0];
	
	return (
		<>
			<Accordion>
				<Accordion.Title>Frequently Asked Questions</Accordion.Title>
				<Accordion.Frame>
					{faqsData.map((item, itemIndex) => (
						<Accordion.Item
							key={item.id}
							open={defaultIndexesOpen.findIndex((index) => String(itemIndex) === String(index))}
						>
							<Accordion.Header>{item.header}</Accordion.Header>
							<Accordion.Body>{item.body}</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion.Frame>
				<OptForm>
					<OptForm.Input placeholder="Email address" />
					<OptForm.Button>Try it now</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
				</OptForm>
			</Accordion>
		</>
	);
}

export default FaqsContainer;
