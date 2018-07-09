import { SubQuillModule } from './sub-quill.module';

describe('SubQuillModule', () => {
  let subQuillModule: SubQuillModule;

  beforeEach(() => {
    subQuillModule = new SubQuillModule();
  });

  it('should create an instance', () => {
    expect(subQuillModule).toBeTruthy();
  });
});
