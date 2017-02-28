# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Group.create!(name: '205호', color: '#FFEB3B')
Group.create!(name: '206호', color: '#FFC107')
Group.create!(name: '207호', color: '#FF9800')
Welcome.create!(description: '수정하세요')
User.create!(username: "관리자", studentid: 123456789, phone: '01012345678', major: '관리자', admin: 'true',password: 'rhksflwk2017')
