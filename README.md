[![Code Climate](https://codeclimate.com/github/agenthome/agenthome-frontend/badges/gpa.svg)](https://codeclimate.com/github/chrismccluskey/agenthome)
[![Test Coverage](https://codeclimate.com/github/agenthome/agenthome-frontend/badges/coverage.svg)](https://codeclimate.com/github/chrismccluskey/agenthome)

Agentho.me
==========

A tool to help facilitate trust and secured communications channels for players of the online game [Ingress](http://www.ingress.com/).

Background
----------

Ingress is an online game similar to risk & capture-the-flag in which the playing field is the entire (real) world. Players must travel to various locations to interact with portals using the scanner app on the player's mobile device. The player can hack the portal to gain inventory to use in game. When 2 portals are owned by the same faction a player with a key can create a link, which draws a line across the playing field. When 3 portals are all linked together, a field is created in the color of the player's faction. The population of the geographic area the field covers counts as points to the team's faction. There are currently two factions: The Resistance and the Enlightend.

Factions succeed when players of the same faction work together and in secret from players of the opposing faction. The scanner app provides a realtime location based communication system that lets players of the same faction speak privately to the rest of the faction. The problem with the in-game communication system is that it is often comprimised by spies who report key intel back to the other faction. As a result of the comprimised comm, agents prefer to communicate in private Google+ communities and other apps which were not built with Ingress in mind. 

Trusted Networks
----------------

The problem with the private Google+ communities and other apps is that eventually they too become comprimised with spies from the opposing faction. Agentho.me will help build a network of trust with your agents. While a large part of managing a secured community is unfortunately manual, the goal is to make it as painless as possible. Anyone can create an account with agentho.me which will by default be unverified. Agents become verified when another agent "vouches" for them. Anyone can "vouch" for another agent, but they do so at the risk of their own credibility. When an agent is verified, the person who confirmed the verification is connected with that agent. Agents who mark another agent as "untrusted" will cause all communication to that agent and their network of verified agents to cease. 

Mole Hunting
------------

Agentho.me will provide various tools to agents to help hunt down information leaks. Agents will be listed in groups, which have the possibility of being marked "suspicious". When there are one or more suspicious groups, a team leader can choose to send communication which differs from the communication sent to the trusted group. If agentho.me finds this intel residing in an opposing agent's agentho.me account or network, it will mark the agent group with the intel as "comprimised" and will automatically cease communication until the team leader takes action. Not everyone will use agentho.me, and so agents acting as spies who spot this phony intel in the field will also be able to signify that the group might be comprimised, regardless of which group (trusted or suspicious) the reporting agent belongs.

Objective-Based, Goal-Orientated
--------------------------------

Agentho.me will help organize information in a way that is important to ingress agents.

Project Status
==============

Product planning, status and bug reports are found on [taiga.io](https://tree.taiga.io/project/agenthome).

How to Contribute
=================
This repository is the source code for what will be hosted at agentho.me.

This project is still in the planning / early development stage. If you play Ingress and would like to learn more or get involved, please contact me through github.

Developer Quickstart
--------------------

What follows is a guide to getting agentho.me code running in a local development environment.

1. Clone this repository `git clone https://github.com/agenthome/agenthome-frontend.git`
2. Inside the your local copy of the repository, run `npm install`
3. Run `gulp dev` to run the build environment


