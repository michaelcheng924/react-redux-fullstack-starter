import { expect } from 'chai';
import { createClient } from '../../api/utils';

describe('api utils', () => {
    describe('createClient', () => {
        it('should have a SUCCESS property', () => {
            const client = createClient({
                actionTypePrefix: 'test'
            });
            expect(client.SUCCESS).to.equal('test_SUCCESS');
        });
    });
});
