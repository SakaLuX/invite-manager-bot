import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { MemberSettingsObject } from '../settings';

import { Guild } from './Guild';
import { Member } from './Member';

export enum MemberSettingsKey {
	hideFromLeaderboard = 'hideFromLeaderboard'
}

@Entity()
export class MemberSetting {
	@PrimaryGeneratedColumn()
	public id: number;

	@CreateDateColumn()
	public createdAt: Date;

	@UpdateDateColumn()
	public updatedAt: Date;

	@Column({ nullable: true })
	public deletedAt: Date;

	@Column({ nullable: false })
	public guildId: string;

	@ManyToOne(type => Guild, g => g.memberSettings)
	public guild: Guild;

	@Column({ nullable: false })
	public memberId: string;

	@ManyToOne(type => Member, m => m.memberSettings)
	public member: Member;

	@Column({ type: 'json' })
	public value: MemberSettingsObject;
}