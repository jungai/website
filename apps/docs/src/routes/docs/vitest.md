# Vitest

## Getting start

install dependencies

```bash
npm install vitest -D
```

กรณีอยาก test แล้วเห็นเป็น ui

```bash
npx install @vitest/ui -D
```

create a `vitest.config.ts` in root (recommend)

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true, // ไม่ต้อง import vitest ในไฟล์ test
		reporters: 'verbose' // แสดงรายละเอียด
	}
});
```

เพิ่ม `script` ใน `package.json`

```json
...
"scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
  }
```

## How to test

จากนั้นสร้างไฟล์ test ขึ้นมาโดยอีกจาก `include` ใน `tsconfig.json`

```json
// tsconfig.json
{
	"compilerOptions": {
		...
		"rootDir": "src",
		...
	},
	"include": ["src/**/*.spec.ts"]
}
```

```typescript
// index.spec.ts
import got from 'got';

type TMockJsonPlaceholder = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

describe('json placeholder', () => {
	test('case1', async () => {
		const res = await got
			.get('https://jsonplaceholder.typicode.com/todos/1')
			.json<TMockJsonPlaceholder>();

		expect(res.id).toBe(1);
	});
});
```

รันคำสั่งเพื่อน test

```bash
npm run test
# npm run test:ui
```
