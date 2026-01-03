<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Role;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            'users.manage',

            'projects.create',
            'projects.update',
            'projects.delete',

            'tasks.assign',
            'tasks.update',
            'tasks.view',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Attach permissions to roles
        $admin = Role::where('name', 'admin')->first();
        $manager = Role::where('name', 'manager')->first();
        $staff = Role::where('name', 'staff')->first();

        $admin->permissions()->sync(Permission::all()->pluck('id'));

        $manager->permissions()->sync(
            Permission::whereIn('name', [
                'projects.create',
                'projects.update',
                'tasks.assign',
                'tasks.update',
                'tasks.view',
            ])->pluck('id')
        );

        $staff->permissions()->sync(
            Permission::whereIn('name', [
                'tasks.view',
                'tasks.update',
            ])->pluck('id')
        );
    }
}

