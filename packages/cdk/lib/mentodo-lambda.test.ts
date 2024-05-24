import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MentodoLambda } from './mentodo-lambda';

describe('The Mentodo stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new MentodoLambda(app, 'MentodoLambda', {
			stack: 'playground',
			stage: 'TEST',
			env: {
				region: 'eu-west-1',
			},
		});
		const template = Template.fromStack(stack);

		/**
		 * Snapshot testing helps to understand exactly what impact a CDK change will have on the provisioned infrastructure.
		 *
		 * @see https://github.com/guardian/cdk/blob/main/docs/best-practices.md#snapshot-testing
		 */
		expect(template.toJSON()).toMatchSnapshot();
	});
});
