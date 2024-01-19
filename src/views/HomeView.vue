<template>
	<CusHeader>
		<template #title>
			<h1>UI Solvento Library</h1>
		</template>
	</CusHeader>
	<div class="container">
		<section class="section">
			<h2>Button Component</h2>
			<div class="section__elements">
				<div>
					<p>Primary Button</p>
					<CusButton :value="'Button Primary'" />
				</div>
				<div>
					<p>Secondary Button</p>
					<CusButton
						:value="'Button Secondary'"
						:type="'secondary'"
					/>
				</div>
				<div>
					<p>Text Button</p>
					<CusButton
						:value="'Button Text'"
						:type="'text'"
						:icon="'icon-check-circle'"
					/>
				</div>
			</div>
		</section>
		<section class="section">
			<h2>Input Component</h2>
			<div class="section__elements">
				<div>
					<p>Basic Input</p>
					<CusInput :placeholder="'Insert name'" />
				</div>
				<div>
					<p>Input with Icon</p>
					<CusInput
						:placeholder="'Insert name'"
						:icon="'icon-user'"
					/>
				</div>
			</div>
		</section>
		<section class="section">
			<h2>Label Component</h2>
			<div class="section__elements">
				<div>
					<p>Basic Label</p>
					<CusLabel :text="'Label Example'" />
				</div>
				<div>
					<p>Label Required</p>
					<CusLabel :text="'Label Example'" isRequired />
				</div>
			</div>
		</section>
		<section class="section">
			<h2>Header Component</h2>
			<div class="section__elements">
				<div class="w-full">
					<p>Header</p>
					<CusHeader>
						<template #title>
							<h2>Title Header</h2>
						</template>
						<template #options>
							<CusButton
								:value="'Button Text'"
								:type="'text'"
								:icon="'icon-arrow-right'"
							/>
						</template>
					</CusHeader>
				</div>
			</div>
		</section>
		<section class="section">
			<h2>Card Component</h2>
			<div class="section__elements">
				<div>
					<p>Card With title</p>
					<CusCard :title="'Title of the card'">
						<template #body>
							<div>
								<CusLabel :text="'Label Example'" isRequired />
								<CusInput
									:placeholder="'Insert name'"
									:icon="'icon-user'"
								/>
								<CusButton
									class="mt-8"
									:value="'Button Primary'"
								/>
							</div>
						</template>
					</CusCard>
				</div>
				<div>
					<p>Card</p>
					<CusCard>
						<template #body>
							<div>
								<h3>$2200</h3>
								<p>Total Sales</p>
							</div>
						</template>
					</CusCard>
				</div>
			</div>
		</section>
		<section class="section">
			<h2>Map Component</h2>
			<div class="section__element">
				<CusMap />
			</div>
		</section>
		<section class="section">
			<h2>Search Component</h2>
			<div class="section__element">
				<CusSearch
					:label="'Buscador'"
					:placeholder="'Type...'"
					:itemsResults="itemsResults"
					@itemSelected="handleItemSelected($event)"
				/>
			</div>
		</section>
	</div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style lang="scss" src="./HomeView.scss" scoped></style>
